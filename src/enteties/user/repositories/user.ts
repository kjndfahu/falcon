import {DepositSystem, DepositType, Prisma, Role, SubscriptionType} from "@prisma/client";
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
export function getUsersAndCreatedAt() {
    return prisma.user.findMany({
        select: {
            id: true,
            createdAt: true,
        },
    });
}
export function getTotalBalance() {
    return prisma.user.findMany({
        select: {
            balance: true,
        },
    });
}
export function getTotalSells() {
    return prisma.subscriptions.findMany({
        select: {
            createdAt: true,
            price: true,
        },
    });
}
export function getUserTotalSells(userId: number) {
    return prisma.subscriptions.findMany({
        where: {userId},
        select: {
            createdAt: true,
            price: true,
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
export function createTransaction(sum: number, type: DepositType, system: DepositSystem, userId: number) {
    return prisma.transactions.create({
        data: {
            sum,
            type,
            system,
            userId
        }
    })
}
export function createTopUp(depositSum: number, type: DepositType, system: DepositSystem, userId: number) {
    return prisma.deposits.create({
        data: {
            depositSum,
            type,
            system,
            userId,
        },
    });
}
export function createWithdraw(withrdawSum: number, type: DepositType, system: DepositSystem, userId: number){
    return prisma.withdraws.create({
        data: {
            withrdawSum,
            type,
            system,
            userId,
        },
    });
}
export function changeUserRole(userEmail: string, role: Role) {
    return prisma.user.update({
        where: {email: userEmail},
        data: {role}
    })
}
export function getUserTransactions(where: Prisma.TransactionsWhereInput) {
    return prisma.transactions.findMany({
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
export function getReferredBy(referralCode:string){
    return prisma.user.findFirst({
        where: {referralCode},
        select: {
            login: true
        }
    })
}
export function getReferralInfo(userId: UserId){
    return prisma.referrals.findFirst({
        where: {userId: userId},
        select: {
            totalReferrals: true,
            totalCashback: true,
            registeredWithPurchase: true,
            purchasesOfReferrals: true,
        }
    })
}
export function createReferrals(userId: number, totalReferrals: number, registeredWithPurchase: number, totalCashback: number, purchasesOfReferrals: number){
    return prisma.referrals.create({
        data: {
            totalReferrals,
            registeredWithPurchase,
            totalCashback,
            purchasesOfReferrals,
            userId
        },
    });
}
export function getRoleCustomers(){
    return prisma.user.findMany({})
}
export function referredBy(referralCode:string){
    return prisma.user.findFirst({
            where: {referralCode},
        select: {
                login: true
        }
        })
}
export function changePercent(userEmail: string, discountRate: number){
    return prisma.user.update({
        where: {email: userEmail},
        data: {discountRate}
    })
}
export function changeMail(userEmail: string, newMail: string){
    return prisma.user.update({
        where: {email: userEmail},
        data: {email: newMail}
    })
}
export function buySubscription(type: SubscriptionType, price: number, trackingNumber: number, autorenew: boolean, userId: UserId, endDate: Date) {
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
export const userRepository = {saveUser, getUser, createTopUp, createReferrals, getUserTotalSells, changeUserRole, changeMail, getRoleCustomers, getActiveSubscriptions, restoreAccess, getReferredBy, getUserAndBalance, blockUser, unblockUser, buySubscription, createWithdraw, getUserTransactions};