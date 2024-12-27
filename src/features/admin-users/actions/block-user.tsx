"use server";

import {z} from "zod";
import {userRepository} from "@/enteties/user/repositories/user";

export type BlockUserState = {
    formData?: FormData;
    errors?: {
        email?: string;
        _errors?: string;
    }
}

const blockUserDataSchema = z.object({
    email: z.string().email(),
})

export const blockUserAction = async (state: BlockUserState, formData: FormData): Promise<BlockUserState> => {
    const data = Object.fromEntries(formData.entries());
    const result = blockUserDataSchema.safeParse(data);

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

        const blockedUser = await userRepository.blockUser(email);

        if (!blockedUser) {
            return {
                formData,
                errors: {
                    _errors: "Failed to block user.",
                },
            };
        }

        return {
            formData,
        };
    } catch (error) {
        console.error("Error blocking user:", error);
        return {
            formData,
            errors: {
                _errors: "Failed to block user",
            },
        };
    }
}