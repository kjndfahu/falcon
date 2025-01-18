"use server";

import { z } from "zod";
import { prisma } from "@/shared/lib/db";
import { revalidatePath } from "next/cache";
import {createdWithdraws} from "@/enteties/user/services/create-withdraw";
import {createTransaction} from "@/enteties/user/repositories/user";

export type DecrementBalanceState = {
    formData?: FormData;
    errors?: {
        email?: string;
        sum?: number;
        _errors?: string;
    };
    success?: boolean;
};

const decrementBalanceSchema = z.object({
    email: z.string().email("Invalid email address"),
    sum: z.string().transform(Number),
});

export async function decrementBalanceAction(
    state: DecrementBalanceState,
    formData: FormData
): Promise<DecrementBalanceState> {
    try {
        const data = Object.fromEntries(formData.entries());
        const result = decrementBalanceSchema.safeParse(data);

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

        if (user.balance < result.data.sum) {
            return {
                formData,
                errors: {
                    _errors: "Insufficient balance"
                }
            };
        }

        await prisma.user.update({
            where: { email: result.data.email },
            data: { balance: { decrement: result.data.sum } }
        });

        await createdWithdraws(result.data.sum, "WITHDRAW", "ADMINRECHARGE", user.id)

        await createTransaction(result.data.sum, "WITHDRAW", "ADMINRECHARGE", user.id);

        revalidatePath('/admin');

        return {
            formData,
            success: true
        };

    } catch (error) {
        console.error("Error decrementing balance:", error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Failed to decrement balance"
            }
        };
    }
}