"use server"

import {$Enums} from "@prisma/client";
import {subscriptionRepository} from "@/enteties/subscription/repositories/subscription";
import ShortUniqueId from "short-unique-id";
import {userRepository} from "@/enteties/user/repositories/user";
import {decrementBalance} from "@/enteties/user/services/decrement-balance";

type CreateSubscriptionActionResult = {
    success: boolean;
    data?: {
        subscription: any;
    };
    error?: string;
}

export async function createSubscriptionAction(
    type: $Enums.SubscriptionType,
    price: number,
    days: number,
    userId: number
): Promise<CreateSubscriptionActionResult> {
    if (!userId || !type || !price || !days) {
        return {
            success: false,
            error: "Missing required parameters"
        };
    }

    try {
        const uid = new ShortUniqueId({ dictionary: 'number', length: 4 });
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + days);

        const trackingNumber = parseInt(uid.randomUUID());
        console.log('Generated tracking number:', trackingNumber);

        const subscription = await subscriptionRepository.createSubscription({
            type,
            price,
            autorenew: false,
            status: "ACTIVE",
            endDate,
            userId,
            trackingNumber
        });

        if (!subscription) {
            return {
                success: false,
                error: "Failed to create subscription"
            };
        }

        const decarementFromBalance = await decrementBalance(userId, price)

        return {
            success: true,
            data: {
                subscription,
            }
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}