import {SubscriptionId, UserId} from "@/kernel/ids";

export type SubscriptionType = "BASIC" | "FAST" | "TURBO";

export type SubscriptionEntity = {
    id: SubscriptionId;
    type: SubscriptionType;
    price: number;
    trackingNumber: number;
    autorenew: boolean;
    endDate: Date;
    userId: UserId;
}