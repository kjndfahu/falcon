import {userRepository} from "@/enteties/user/repositories/user";
import {getSubscription} from "@/enteties/subscription/repositories/subscription";

export const getActiveCustomers = async ()=> {
    const getMyReferrals = await userRepository.getRoleCustomers();
    const referredIds = getMyReferrals.map((user) => user.id);

    const now = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);

    let activeCustomerCount = 0;

    for (const referredId of referredIds) {
        const subscriptions = await getSubscription(referredId);
        const hasRecentSubscription = subscriptions.some((sub) => {
            const subscriptionDate = new Date(sub.createdAt);
            return subscriptionDate >= thirtyDaysAgo && subscriptionDate <= now;
        });

        if (hasRecentSubscription) {
            activeCustomerCount++;
        }
    }

    return activeCustomerCount;
}