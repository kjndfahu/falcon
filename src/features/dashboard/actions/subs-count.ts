import {getAllSubscriptions} from "@/enteties/subscription/repositories/subscription";

const allSubs = await getAllSubscriptions()
export const subscriptionCounts = allSubs.reduce((acc, sub) => {
    if (!acc[sub.type]) {
        acc[sub.type] = 0;
    }
    acc[sub.type]++;
    return acc;
}, {});