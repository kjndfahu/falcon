import { UserId } from "@/kernel/ids";
import { getSubscription } from "@/enteties/subscription/repositories/subscription";

export async function getActiveSubs({ userId, currentDate }: { userId: UserId; currentDate: Date }) {
    const subscriptions = await getSubscription(userId);

    const activeSubscriptions = subscriptions.filter((subscription: { endDate: Date }) => {
        return currentDate <= new Date(subscription.endDate);
    });

    return activeSubscriptions;
}