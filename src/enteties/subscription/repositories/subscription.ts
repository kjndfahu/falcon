import {UserId} from "@/kernel/ids";
import {prisma} from "@/shared/lib/db";

export function getSubscription(userId: UserId){
    return prisma.subscriptions.findMany({
        where: {userId: userId},
    })
}