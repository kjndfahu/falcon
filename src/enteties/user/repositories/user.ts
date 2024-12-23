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

export function getUserTransactions(where: Prisma.DepositsWhereInput) {
    return prisma.deposits.findMany({
        where,
        orderBy: {
            createdAt: 'desc'
        }
    })
}

export const userRepository = {saveUser, getUser, createTopUp, getUserTransactions};