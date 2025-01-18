"use server";

import { z } from "zod";
import { prisma } from "@/shared/lib/db";
import { revalidatePath } from "next/cache";
import {createdTopUp} from "@/enteties/user/services/create-top-up";
import {createTransaction} from "@/enteties/user/repositories/user";

export type AddBalanceState = {
    formData?: FormData;
    errors?: {
        email?: string;
        sum?: number;
        _errors?: string;
    };
    success?: boolean;
};

const addBalanceSchema = z.object({
    email: z.string().email("Invalid email address"),
    sum: z.string().transform(Number),
});

export async function addBalanceAction(
    state: AddBalanceState,
    formData: FormData
): Promise<AddBalanceState> {
    try {
        const data = Object.fromEntries(formData.entries());
        const result = addBalanceSchema.safeParse(data);

        if (!result.success) {
            return {
                formData,
                errors: {
                    email: result.error.flatten().fieldErrors.email?.[0],
                    _errors: "Invalid data"
                }
            };
        }

        const user = await prisma.user.findUnique({
            where: { email: result.data.email }
        });

        if (!user) {
            return {
                formData,
                errors: {
                    _errors: "User doesn't exist"
                }
            };
        }

        await prisma.user.update({
            where: { email: result.data.email },
            data: { balance: { increment: result.data.sum } }
        });

        await createdTopUp(result.data.sum, "TOPUP", "ADMINRECHARGE", user.id);

        await createTransaction(result.data.sum, "TOPUP", "ADMINRECHARGE", user.id);

        revalidatePath('/admin');

        return {
            formData,
            success: true
        };


    } catch (error) {
        console.error("Error adding balance:", error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Failed to add balance"
            }
        };
    }
}