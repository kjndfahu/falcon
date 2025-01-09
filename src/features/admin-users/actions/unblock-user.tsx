"use server";

import { z } from "zod";

import { revalidatePath } from "next/cache";
import {prisma} from "../../../../prisma/prisma-client";


export type UnblockUserState = {
    formData?: FormData;
    errors?: {
        email?: string;
        _errors?: string;
    };
    success?: boolean;
}

const unblockUserDataSchema = z.object({
    email: z.string().email(),
});

export const unblockUserAction = async (state: UnblockUserState, formData: FormData): Promise<UnblockUserState> => {
    try {
        const data = Object.fromEntries(formData.entries());
        const result = unblockUserDataSchema.safeParse(data);

        if (!result.success) {
            const formattedErrors = result.error.format();

            return {
                formData,
                errors: {
                    email: formattedErrors?.email?._errors.join(", "),
                    _errors: formattedErrors?._errors.join(", "),
                }
            };
        }

        const { email } = result.data;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return {
                formData,
                errors: {
                    _errors: "User does not exist.",
                }
            };
        }

        await prisma.user.update({
            where: { email },
            data: { isBlocked: false }
        });

        revalidatePath('/admin');

        return {
            formData,
            success: true
        };
    } catch (error) {
        console.error("Error unblocking user:", error);
        return {
            formData,
            errors: {
                _errors: "Failed to unblock user"
            }
        };
    }
};