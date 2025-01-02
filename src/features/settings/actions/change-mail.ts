"use server";

import { z } from "zod";
import { userRepository } from "@/enteties/user/repositories/user";
import { revalidatePath } from "next/cache";

export type ChangeMailState = {
    formData?: FormData;
    errors?: {
        email?: string;
        newEmail?: string;
        _errors?: string;
    };
    success?: boolean;
};

const changeMailSchema = z.object({
    email: z.string().email("Invalid email"),
    newEmail: z.string().email("Invalid new email"),
}).refine(data => data.email !== data.newEmail, {
    message: "New email must be different from current email",
    path: ["newEmail"]
});

export const changeMailAction = async (
    state: ChangeMailState,
    formData: FormData
): Promise<ChangeMailState> => {
    try {
        const data = Object.fromEntries(formData.entries());
        const result = changeMailSchema.safeParse(data);

        if (!result.success) {
            const formattedErrors = result.error.format();
            return {
                formData,
                errors: {
                    email: formattedErrors?.email?._errors.join(", "),
                    newEmail: formattedErrors?.newEmail?._errors.join(", "),
                    _errors: formattedErrors?._errors?.join(", "),
                },
            };
        }

        const existingUser = await userRepository.getUser({ email: result.data.email });
        if (!existingUser) {
            return {
                formData,
                errors: {
                    _errors: "Current email not found",
                },
            };
        }

        const newEmailUser = await userRepository.getUser({ email: result.data.newEmail });
        if (newEmailUser) {
            return {
                formData,
                errors: {
                    _errors: "New email is already in use",
                },
            };
        }

        await userRepository.changeMail(result.data.email, result.data.newEmail);
        revalidatePath('/settings');

        return {
            formData,
            success: true
        };

    } catch (error) {
        console.error("Error changing email:", error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Failed to change email",
            },
        };
    }
};
