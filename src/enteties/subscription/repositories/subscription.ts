import {UserId} from "@/kernel/ids";
import {prisma} from "@/shared/lib/db";

export function getSubscription(userId: UserId){
    return prisma.subscriptions.findMany({
        where: {userId: userId},
    })
}
export function setAutoRenew(trackingNumber: number, autorenew: boolean) {
    return prisma.subscriptions.update({
        where: {trackingNumber},
        data: {
            autorenew,
        }
    })
}
export function getAllSubscriptions(){
    return prisma.subscriptions.findMany()
}