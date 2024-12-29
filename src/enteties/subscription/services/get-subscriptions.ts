import {UserId} from "@/kernel/ids";
import {getSubscription} from "@/enteties/subscription/repositories/subscription";

export async function getSubs({userId}: {userId: UserId}) {
    const subcriptions = await getSubscription(userId)
    return subcriptions;
}