"use server";

import {z} from "zod";
import {userRepository} from "@/enteties/user/repositories/user";
import {passwordService} from "@/enteties/user/services/password";

export type RestoreAccessState = {
    formData?: FormData;
    errors?: {
        email?: string;
        password?: string;
        _errors?: string;
    }
}

const restoreAccessDataSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

export const restoreAccessAction = async (state: RestoreAccessState, formData: FormData): Promise<RestoreAccessState> => {
    const data = Object.fromEntries(formData.entries());
    const result = restoreAccessDataSchema.safeParse(data);

    if(!result.success){
        const formattedErrors = result.error.format();

        return {
            formData,
            errors: {
                email: formattedErrors?.email?._errors.join(", "),
                password: formattedErrors?.password?._errors.join(", "),
                _errors: formattedErrors?._errors.join(", "),
            }
        }
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

        const {hash, salt} = await passwordService.hashPassword(password)

        const changePassword = await userRepository.changeUserPassword(email, hash, salt);

        if (!changePassword) {
            return {
                formData,
                errors: {
                    _errors: "Failed to change password.",
                },
            };
        }

        return {
            formData,
        };
    } catch (error) {
        console.error("Error updating password:", error);
        return {
            formData,
            errors: {
                _errors: "Failed to change password",
            },
        };
    }

}