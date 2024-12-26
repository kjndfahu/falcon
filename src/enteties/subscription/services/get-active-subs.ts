import {subscriptionRepository} from "@/enteties/subscription/repositories/subscription";

export async function getActiveSubs({userId}: {userId: number}): Promise<any[]> {
    try {
        const subs = await subscriptionRepository.getUserSubscription(userId);
        return Array.isArray(subs) ? subs : [];
    } catch (error) {
        console.error("Error getting active subscriptions:", error);
        return [];
    }
}