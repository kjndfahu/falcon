import {$Enums, Prisma} from "@prisma/client";
import {UserEntity} from "../domain";
import {prisma} from "@/shared/lib/db";
import {UserId} from "@/kernel/ids";

export function saveUser(user: UserEntity): Promise<UserEntity> {
    return prisma.user.upsert({
        where: {
            id: user.id
        },
        create: user,
        update: user,
    })
}
export function getUser(where: Prisma.UserWhereInput) {
    return prisma.user.findFirst({where})
}
export function getTotalBalance() {
    return prisma.user.findMany({
        select: {
            balance: true,
        },
    });
}
export function getUserAndBalance() {
    return prisma.user.findMany({
        select: {
            id: true,
            balance: true,
        },
    });
}
export function getActiveSubscriptions(now: Date) {
    return prisma.subscriptions.findMany({
        where: {
            endDate: {
                gt: now,
            },
        },
    });
}
export function createTopUp(depositSum: number, type: $Enums.DepositType, system: $Enums.DepositSystem, userId: number) {
    return prisma.deposits.create({
        data: {
            depositSum,
            type,
            system,
            userId,
        },
    });
}
export function createWithdraw(withrdawSum: number, type: $Enums.DepositType, system: $Enums.DepositSystem, userId: number){
    return prisma.withdraws.create({
        data: {
            withrdawSum,
            type,
            system,
            userId,
        },
    });
}
export function changeUserRole(userEmail: string, role: $Enums.Role) {
    return prisma.user.update({
        where: {email: userEmail},
        data: {role}
    })
}
export function getUserTransactions(where: Prisma.DepositsWhereInput) {
    return prisma.deposits.findMany({
        where,
        orderBy: {
            createdAt: 'desc'
        }
    })
}
export function restoreAccess(email: string, password: string, salt: string) {
    return prisma.user.update({
        where: {email},
        data: {
            password,
            salt
        }
    })
}
export function blockUser(email: string){
    return prisma.user.update({
        where: {email},
        data: {
            isBlocked: true,
        }
    })
}
export function unblockUser(email: string){
    return prisma.user.update({
        where: {email},
        data: {
            isBlocked: false,
        }
    })
}
export function buySubscription(type: $Enums.SubscriptionType, price: number, trackingNumber: number, autorenew: boolean, userId: UserId, endDate: Date) {
    return prisma.subscriptions.create({
        data: {
            type,
            price,
            trackingNumber,
            autorenew,
            userId,
            endDate
        }
    })
}
export const userRepository = {saveUser, getUser, createTopUp, changeUserRole, getActiveSubscriptions, restoreAccess, getUserAndBalance, blockUser, unblockUser, buySubscription, createWithdraw, getUserTransactions};