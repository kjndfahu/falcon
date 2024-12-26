import {$Enums, Prisma} from "@prisma/client";
import {UserEntity} from "../domain";
import {prisma} from "@/shared/lib/db";

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
export function changeUserPassword(userEmail: string, password: string, salt: string) {
    return prisma.user.update({
        where: {email: userEmail},
        data: {password, salt}
    })
}
export function blockUser(userEmail: string) {
    return prisma.user.update({
        where: {email: userEmail},
        data: {isBlocked: true}
    })
}
export function unblockUser(userEmail: string) {
    return prisma.user.update({
        where: {email: userEmail},
        data: {isBlocked: false}
    })
}


export const userRepository = {saveUser, getUser, createTopUp, changeUserRole, changeUserPassword, blockUser,unblockUser, createWithdraw, getUserTransactions};