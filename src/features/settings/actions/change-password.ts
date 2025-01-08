"use server";

import { z } from "zod";
import { prisma } from "@/shared/lib/db";
import { passwordService } from "@/enteties/user/services/password";
import { revalidatePath } from "next/cache";

export type ChangePasswordState = {
    formData?: FormData;
    errors?: {
        _errors?: string;
    };
    success?: boolean;
};

const changePasswordSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export async function changePasswordAction(
    state: ChangePasswordState,
    formData: FormData
): Promise<ChangePasswordState> {
    try {
        const data = Object.fromEntries(formData.entries());
        const result = changePasswordSchema.safeParse(data);

        if (!result.success) {
            return {
                formData,
                errors: {
                    _errors: result.error.flatten().formErrors[0] || "Invalid form data"
                }
            };
        }

        const { email, password } = result.data;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return {
                formData,
                errors: {
                    _errors: "User not found"
                }
            };
        }

        const { hash, salt } = await passwordService.hashPassword(password);

        await prisma.user.update({
            where: { email },
            data: {
                password: hash,
                salt
            }
        });

        revalidatePath('/settings');

        return {
            formData,
            success: true
        };

    } catch (error) {
        console.error('Change password error:', error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Failed to change password"
            }
        };
    }
}
