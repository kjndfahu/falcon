"use server";

import {z} from "zod";
import {changeUserRole, userRepository} from "@/enteties/user/repositories/user";
import {$Enums} from "@prisma/client";

export type ChangeRoleState = {
    formData?: FormData;
    errors?: {
        email?: string;
        role?: $Enums.Role;
        _errors?: string;
    }
}

const changeRoleDataSchema = z.object({
    email: z.string().email(),
    role: z.enum([
        "USER",
        "ADMIN",
        "RESELLER",
        "PARTNER",
        "VIPPARTNER",
        "DISTRIBUTOR",
        "INFLUENCER",
    ]),
})

export const changeRoleAction = async(state: ChangeRoleState, formData: FormData): Promise<ChangeRoleState> => {
    const data = Object.fromEntries(formData.entries());
    const result = changeRoleDataSchema.safeParse(data);

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

    const { email, role } = result.data;

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

        const changedUserRole = await changeUserRole(email, role)

        return {
            formData,
        };


    } catch (error) {
        console.error("Error updating balance:", error);
        return {
            formData,
            errors: {
                _errors: "Failed to update balance",
            },
        };
    }
}