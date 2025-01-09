'use server'

import { z } from "zod";
import { userRepository } from "@/enteties/user/repositories/user";
import { passwordService } from "@/enteties/user/services/password";

// Определяем схему для валидации данных
const restoreAccessDataSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
});

// Определяем тип для состояния
interface RestoreAccessState {
    formData: FormData | undefined;
    errors?: {    // errors может быть объектом или undefined
        email?: string;
        password?: string;
        _errors?: string;
    };
}

export async function restoreAccessAction(prevState: RestoreAccessState, formData: FormData) {
    console.log('Action started with data:', Object.fromEntries(formData.entries()));
    const data = Object.fromEntries(formData.entries());
    const result = restoreAccessDataSchema.safeParse(data);

    if (!result.success) {
        const formattedErrors = result.error.format();
        console.log('Validation errors:', formattedErrors);

        return {
            formData,
            errors: {
                email: formattedErrors?.email?._errors.join(', '),
                password: formattedErrors?.password?._errors.join(', '),
                _errors: formattedErrors?._errors?.join(', '),
            }
        };
    }

    const { email, password } = result.data;

    try {
        const user = await userRepository.getUser({ email });

        if (!user) {
            return {
                formData,
                errors: {
                    _errors: "User does not exist.",
                },
            };
        }

        const { hash, salt } = await passwordService.hashPassword(password);

        const restoreAccess = await userRepository.restoreAccess(email, hash, salt);

        console.log('Restore access result:', restoreAccess);

        return {
            formData,
            errors: {}
        };
    } catch (error) {
        console.error('Restore access error:', error);
        return {
            formData,
            errors: {
                _errors: "Failed to restore access",
            },
        };
    }
}
