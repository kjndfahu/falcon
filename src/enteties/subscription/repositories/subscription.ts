import {prisma} from "@/shared/lib/db";
import {$Enums} from "@prisma/client";

interface CreateSubscriptionParams {
    type: $Enums.SubscriptionType;
    price: number;
    autorenew: boolean;
    status: $Enums.SubscriptionStatus;
    endDate: Date;
    userId: number;
    trackingNumber: number;
}

export const subscriptionRepository = {
    createSubscription: (params: CreateSubscriptionParams) => {
        return prisma.subscription.create({
            data: params
        });
    },
    
    getUserSubscription: (userId: number) => {
        return prisma.subscription.findMany({
            where: {
                userId,
                status: "ACTIVE"
            }
        });
    }
};