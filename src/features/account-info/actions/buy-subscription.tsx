"use server";

import {z} from "zod";
import {$Enums} from "@prisma/client";
import {prisma} from "@/shared/lib/db";
import {getSubscription} from "@/enteties/subscription/repositories/subscription";
import {userRepository} from "@/enteties/user/repositories/user";

export type BuySubscriptionState = {
    formData?: FormData;
    errors?: {
        _errors?: string;
    }
}

const buySubscriptionDataSchema = z.object({
    type: z.enum(['BASIC', 'FAST', 'TURBO']),
    price: z.string().transform((val) => Number(val)),
    trackingNumber: z.string().transform((val) => Number(val)),
    autorenew: z.string().transform((val) => val === 'true'),
    userId: z.string().transform((val) => Number(val)),
    endDate: z.string().transform((val) => new Date(val))
});

export const buySubscriptionAction = async (
    state: BuySubscriptionState,
    formData: FormData
): Promise<BuySubscriptionState> => {
    const data = Object.fromEntries(formData.entries());
    console.log('Received data:', data);

    const result = buySubscriptionDataSchema.safeParse(data);

    if (!result.success) {
        console.error('Validation error:', result.error.format());
        return {
            formData,
            errors: {
                _errors: "Invalid subscription data"
            }
        };
    }

    try {
        const transaction = await prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: {id: result.data.userId}
            });

            if (!user) {
                throw new Error("User not found");
            }

            if (user.balance < result.data.price) {
                throw new Error("Insufficient balance");
            }

            const subscription = await tx.subscriptions.create({
                data: {
                    type: result.data.type as $Enums.SubscriptionType,
                    price: result.data.price,
                    trackingNumber: result.data.trackingNumber,
                    autorenew: result.data.autorenew,
                    userId: result.data.userId,
                    endDate: result.data.endDate
                }
            });

            const updatedUser = await tx.user.update({
                where: {id: user.id},
                data: {
                    balance: user.balance - result.data.price
                }
            });

            if (user.referredBy !== 0) {
                const existingReferral = await tx.referrals.findFirst({
                    where: {
                        userId: user.referredBy
                    }
                });

                if (existingReferral) {
                    const getReferral = await userRepository.getUser({id: existingReferral.userId});

                    if (!getReferral) {
                        throw new Error(`Referral user not found: ${existingReferral.userId}`);
                    }

                    await tx.referrals.update({
                        where: {
                            id: existingReferral.id
                        },
                        data: {
                            purchasesOfReferrals: {
                                increment: result.data.price
                            },
                            registeredWithPurchase: {
                                increment: 1
                            },
                            totalCashback: {
                                increment: (result.data.price * getReferral.discountRate) / 100
                            }
                        }
                    });
                } else {
                    await tx.referrals.create({
                        data: {
                            userId: user.referredBy,
                            purchasesOfReferrals: result.data.price,
                            registeredWithPurchase: 1,
                            totalReferrals: 1
                        }
                    });
                }
            }

            const userSusbcriptions = await getSubscription(result.data.userId)

            if(userSusbcriptions.length >= 0 && userSusbcriptions.length <= 3) {
                const updateUserRole = await tx.user.update({
                    where: {id: user.id},
                    data: {
                        role: "RESELLER"
                    }
                })
            } else if (userSusbcriptions.length >= 4 && userSusbcriptions.length <= 13){
                const updateUserRole = await tx.user.update({
                    where: {id: user.id},
                    data: {
                        role: "PARTNER"
                    }
                })
            } else if (userSusbcriptions.length >= 14 && userSusbcriptions.length <= 28){
                const updateUserRole = await tx.user.update({
                    where: {id: user.id},
                    data: {
                        role: "VIPPARTNER"
                    }
                })
            } else if (userSusbcriptions.length >= 29){
                const updateUserRole = await tx.user.update({
                    where: {id: user.id},
                    data: {
                        role: "DISTRIBUTOR"
                    }
                })
            }


            return {subscription, updatedUser};
        });

        console.log('Transaction completed successfully:', transaction);
        return {formData};

    } catch (error) {
        console.error("Error processing subscription:", error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Failed to process subscription"
            }
        };
    }
};