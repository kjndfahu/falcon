"use server";

import {z} from "zod";
import {updateUserBalance} from "@/enteties/user/services/update-balance";
import {createTransaction, userRepository} from "@/enteties/user/repositories/user";
import {createdTopUp} from "@/enteties/user/services/create-top-up";

export type AddBalanceState = {
    formData?: FormData;
    errors?: {
        email?: string;
        sum?: string;
        _errors?: string;
    }
}

const addBalanceDataSchema = z.object({
    email: z.string().email(),
    sum: z.string().transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val > 0, "Sum must be a positive number")
})

export const addBalanceAction = async (state: AddBalanceState, formData: FormData): Promise<AddBalanceState> => {
    const data = Object.fromEntries(formData.entries());
    const result = addBalanceDataSchema.safeParse(data);

    if(!result.success){
        const formattedErrors = result.error.format();

        return {
            formData,
            errors: {
                email: formattedErrors?.email?._errors.join(", "),
                sum: formattedErrors?.sum?._errors.join(", "),
                _errors: formattedErrors?._errors.join(", "),
            }
        }
    }

    const { email, sum } = result.data;

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

        const depositResult = await createdTopUp(sum, "TOPUP", "ADMINRECHARGE", user.id);
        const transactionResult = await createTransaction(sum, "TOPUP", "ADMINRECHARGE", user.id)

        const addBalanceResult = await updateUserBalance(user.id, sum);
        if (!addBalanceResult.success) {
            return {
                formData,
                errors: {
                    _errors: "Failed to update balance.",
                },
            };
        }

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