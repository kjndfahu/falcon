import {Prisma} from "@prisma/client";
import {prisma} from "@/shared/lib/db";

export function getCurrentUserTransactions(where: Prisma.DepositsWhereInput){
    const transaction = prisma.deposits.findMany({where})
    return transaction
}