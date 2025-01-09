import { getAllSubscriptions } from "@/enteties/subscription/repositories/subscription";
import { SubscriptionType } from "@/enteties/subscription/domain";

const allSubs = await getAllSubscriptions();

export const subscriptionCounts: Record<SubscriptionType, number> = allSubs.reduce((acc: Record<SubscriptionType, number>, sub) => {
    if (!acc[sub.type]) {
        acc[sub.type] = 0;
    }
    acc[sub.type]++;
    return acc;
}, {} as Record<SubscriptionType, number>);