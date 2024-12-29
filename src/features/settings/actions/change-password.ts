"use server";

import { z } from "zod";
import {userRepository} from "@/enteties/user/repositories/user";
import {passwordService} from "@/enteties/user/services/password";

export type ChangePasswordState = {
    formData?: FormData;
    errors?: {
        email?: string;
        password?: string;
        confirmPassword?: string;
        _errors?: string;
    };
};

const changePasswordSchema = z
    .object({
        email: z.string().email(),
        password: z.string().min(3),
        confirmPassword: z
            .string()
            .min(3, "Confirm Password must be at least 3 characters long"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const changePasswordAction = async (
    state: ChangePasswordState,
    formData: FormData
): Promise<ChangePasswordState> => {
    const data = Object.fromEntries(formData.entries());
    const result = changePasswordSchema.safeParse(data);

    if (!result.success) {
        const formattedErrors = result.error.format();

        return {
            formData,
            errors: {
                email: formattedErrors?.email?._errors.join(", "),
                password: formattedErrors?.password?._errors.join(", "),
                confirmPassword: formattedErrors?.confirmPassword?._errors.join(
                    ", "
                ),
                _errors: formattedErrors?._errors.join(", "),
            },
        };
    }

    const {hash, salt} = await passwordService.hashPassword(result.data.password)

    const changedPassword = await userRepository.restoreAccess(result.data.email, hash, salt)

    console.log('Restore access result:', changedPassword);
    return {
        formData,
        errors: {
            _errors: "Пользователь с таким login или email существует",
        },
    };
};
