"use server"

import { createdTopUp } from "@/enteties/user/services/create-top-up";
import { updateUserBalance } from "@/enteties/user/services/update-balance";
import { createTransaction } from "@/enteties/user/repositories/user";
import {$Enums, DepositType} from "@prisma/client";
import DepositSystem = $Enums.DepositSystem;

type DepositActionResult = {
    success: boolean;
    data?: {
        deposit: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            depositSum: number;
            type: DepositType;
            system: DepositSystem;
            userId: number | null;
        };
        updatedBalance: number;
    };
    error?: string;
}

export async function createDepositAction(
    depositSum: number, 
    type: "TOPUP",
    system: "USDT",
    userId: number
): Promise<DepositActionResult> {
    try {
        const depositResult = await createdTopUp(depositSum, type, system, userId);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const transactionResult = await createTransaction(depositSum, type, system, userId);
        
        if (!depositResult) {
            return { 
                success: false, 
                error: "Failed to create deposit" 
            };
        }


        const balanceResult = await updateUserBalance(userId, depositSum);
        
        if (!balanceResult.success || !balanceResult.data) {
            return { 
                success: false, 
                error: "Failed to update balance" 
            };
        }

        return { 
            success: true, 
            data: {
                deposit: depositResult,
                updatedBalance: balanceResult.data.balance
            }
        };
    } catch (error) {
        console.error("Error creating deposit:", error);
        return { 
            success: false, 
            error: "Failed to create deposit" 
        };
    }
} 