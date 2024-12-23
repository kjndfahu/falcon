"use server"

import { createdTopUp } from "@/enteties/user/services/create-top-up";
import { updateUserBalance } from "@/enteties/user/services/update-balance";

type DepositActionResult = {
    success: boolean;
    nothing: null;
    data?: {
        deposit: any;
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
        
        if (!depositResult) {
            return { success: false, error: "Failed to create deposit" };
        }

        const balanceResult = await updateUserBalance(userId, depositSum);
        
        if (!balanceResult.success || !balanceResult.data) {
            return { success: false, error: "Failed to update balance" };
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
        return { success: false, error: "Failed to create deposit" };
    }
} 