"use server";

import { z } from "zod";
import { prisma } from "@/shared/lib/db";
import { revalidatePath } from "next/cache";

export type BlockUserState = {
    formData?: FormData;
    errors?: {
        email?: string;
        _errors?: string;
    };
    success?: boolean;
};

const blockUserSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export async function blockUserAction(
    state: BlockUserState,
    formData: FormData
): Promise<BlockUserState> {
    try {
        const data = Object.fromEntries(formData.entries());
        console.log("Received data:", data);

        const result = blockUserSchema.safeParse(data);

        if (!result.success) {
            return {
                formData,
                errors: {
                    email: result.error.flatten().fieldErrors.email?.join(", "),
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
                    _errors: "User not found"
                }
            };
        }

        await prisma.user.update({
            where: { email: result.data.email },
            data: { isBlocked: true }
        });

        revalidatePath('/admin');

        return {
            formData,
            success: true
        };

    } catch (error) {
        console.error("Error blocking user:", error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Failed to block user"
            }
        };
    }
} 