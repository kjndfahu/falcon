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
export function getNeededSubscription(trackingNumber: number) {
    return prisma.subscriptions.findFirst({
        where: {trackingNumber},
    })
}
export function updateSubscription(trackingNumber: number, endDate: Date) {
    return prisma.subscriptions.update({
        where: {trackingNumber},
        data: {
            endDate
        }
    })
}