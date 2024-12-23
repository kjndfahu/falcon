"use server"

import { prisma } from "@/shared/lib/db";
import { $Enums } from "@prisma/client";

export async function createdWithdraws(
    withrdawSum: number,
    type: $Enums.DepositType,
    system: $Enums.DepositSystem,
    userId: number
) {
    try {
        const withdraw = await prisma.withdraws.create({
            data: {
                withrdawSum,
                type,
                system,
                userId,
            },
        });
        
        return withdraw;
    } catch (error) {
        console.error("Error creating withdraw:", error);
        throw error;
    }
}