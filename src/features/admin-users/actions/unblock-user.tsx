"use server";

import {z} from "zod";
import { userRepository} from "@/enteties/user/repositories/user";

export type UnblockUserState = {
    formData?: FormData;
    errors?: {
        email?: string;
        _errors?: string;
    }
}

const unblockUserDataSchema = z.object({
    email: z.string().email(),
})

export const unblockUserAction = async (state: UnblockUserState, formData: FormData): Promise<UnblockUserState> => {
    const data = Object.fromEntries(formData.entries());
    const result = unblockUserDataSchema.safeParse(data);

    if(!result.success){
        const formattedErrors = result.error.format();

        return {
            formData,
            errors: {
                email: formattedErrors?.email?._errors.join(", "),
                _errors: formattedErrors?._errors.join(", "),
            }
        }
    }

    const { email } = result.data;

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

        const unblockResult = await userRepository.unblockUser(email);

        return {
            formData,
        };
    } catch (error) {
        console.error("Error blocking user:", error);
        return {
            formData,
            errors: {
                _errors: "Failed to block",
            },
        };
    }
}