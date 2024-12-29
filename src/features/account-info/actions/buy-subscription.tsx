"use server";

import { z } from "zod";
import { userRepository } from "@/enteties/user/repositories/user";
import { UserId } from "@/kernel/ids";
import { $Enums } from "@prisma/client";
import { prisma } from "@/shared/lib/db";

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
        // Начинаем транзакцию
        const transaction = await prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { id: result.data.userId }
            });

            if (!user) {
                throw new Error("User not found");
            }

            if (user.balance < result.data.price) {
                throw new Error("Insufficient balance");
            }

            // Создаем подписку
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

            // Обновляем баланс пользователя
            const updatedUser = await tx.user.update({
                where: { id: user.id },
                data: {
                    balance: user.balance - result.data.price
                }
            });

            return { subscription, updatedUser };
        });

        console.log('Transaction completed successfully:', transaction);
        return { formData };

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