"use server";

import { z } from "zod";
import { prisma } from "@/shared/lib/db";
import { revalidatePath } from "next/cache";
import { SubscriptionType, Role } from "@prisma/client";

const buySubscriptionSchema = z.object({
    type: z.enum(['BASIC', 'FAST', 'TURBO']),
    price: z.string().transform(Number),
    trackingNumber: z.string().transform(Number),
    autorenew: z.string().transform(val => val === 'true'),
    userId: z.string().transform(Number),
    endDate: z.string().transform(date => new Date(date))
});

export type BuySubscriptionState = {
    formData?: FormData;
    errors?: {
        _errors?: string;
    };
};

const calculateDiscountedPrice = (price: number, userRole: Role) => {
    const discounts = {
        'RESELLER': 0.05,
        'PARTNER': 0.1,
        'VIPPARTNER': 0.15,
        'DISTRIBUTOR': 0.2,
        'INFLUENCER': 0,
        'USER': 0,
        'ADMIN': 0
    };

    const discount = discounts[userRole] || 0;
    const discountedPrice = price * (1 - discount);
    const savedAmount = price - discountedPrice;

    return {
        finalPrice: discountedPrice,
        savedAmount: savedAmount
    };
};

export async function buySubscriptionAction(
    state: BuySubscriptionState,
    formData: FormData
): Promise<BuySubscriptionState> {
    try {
        const data = Object.fromEntries(formData.entries());
        const result = buySubscriptionSchema.safeParse(data);

        if (!result.success) {
            return {
                formData,
                errors: {
                    _errors: "Invalid form data"
                }
            };
        }

        const { type, price, trackingNumber, autorenew, userId, endDate } = result.data;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { 
                role: true, 
                balance: true,
                referredBy: true
            }
        });

        if (!user) {
            return {
                formData,
                errors: {
                    _errors: "User not found"
                }
            };
        }

        const { finalPrice, savedAmount } = calculateDiscountedPrice(price, user.role);

        if (user.balance < finalPrice) {
            return {
                formData,
                errors: {
                    _errors: "Insufficient balance"
                }
            };
        }

        await prisma.$transaction(async (tx) => {
            await tx.subscriptions.create({
                data: {
                    type: type as SubscriptionType,
                    price: Math.round(finalPrice),
                    trackingNumber,
                    autorenew,
                    userId,
                    endDate,
                    earns: savedAmount
                }
            });

            await tx.user.update({
                where: { id: userId },
                data: {
                    balance: {
                        decrement: finalPrice
                    }
                }
            });

            if (user.referredBy !== 0) {
                const referer = await tx.user.findUnique({
                    where: { id: user.referredBy }
                });

                if (referer) {
                    const refererReferral = await tx.referrals.findUnique({
                        where: { userId: referer.id }
                    });

                    const cashback = finalPrice * 0.1;

                    await tx.user.update({
                        where: { id: referer.id },
                        data: {
                            balance: {
                                increment: cashback
                            }
                        }
                    });

                    if (refererReferral) {
                        await tx.referrals.update({
                            where: { userId: referer.id },
                            data: {
                                purchasesOfReferrals: {
                                    increment: finalPrice
                                },
                                totalCashback: {
                                    increment: cashback
                                },
                                registeredWithPurchase: {
                                    increment: 1
                                }
                            }
                        });
                    } else {
                        await tx.referrals.create({
                            data: {
                                userId: referer.id,
                                purchasesOfReferrals: finalPrice,
                                totalCashback: cashback,
                                registeredWithPurchase: 1,
                                totalReferrals: 1
                            }
                        });
                    }

                    await tx.transactions.create({
                        data: {
                            sum: cashback,
                            type: "TOPUP",
                            system: "USDT",
                            userId: referer.id
                        }
                    });
                }
            }
        });

        revalidatePath('/personal-cabinet');

        return { formData };

    } catch (error) {
        console.error('Buy subscription error:', error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Failed to buy subscription"
            }
        };
    }
}