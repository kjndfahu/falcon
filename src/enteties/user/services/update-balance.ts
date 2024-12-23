"use server"

import { prisma } from "@/shared/lib/db";

export async function updateUserBalance(userId: number, amount: number) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            return { success: false, error: "User not found" };
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                balance: {
                    increment: amount
                }
            }
        });

        return { success: true, data: updatedUser };
    } catch (error) {
        console.error("Error updating balance:", error);
        return { success: false, error: "Failed to update balance" };
    }
} 