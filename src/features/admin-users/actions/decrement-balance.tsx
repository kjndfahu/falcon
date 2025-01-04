"use server";

import {z} from "zod";
import {createTransaction, userRepository} from "@/enteties/user/repositories/user";
import {createdWithdraws} from "@/enteties/user/services/create-withdraw";
import {decrementBalance} from "@/enteties/user/services/decrement-balance";

export type DecrementBalanceState = {
    formData?: FormData;
    errors?: {
        email?: string;
        sum?: string;
        _errors?: string;
    }
}

const decrementBalanceDataSchema = z.object({
    email: z.string().email(),
    sum: z.string().transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val > 0, "Sum must be a positive number")
})

export async function decrementBalanceAction(state: DecrementBalanceState, formData: FormData): Promise<DecrementBalanceState> {
    console.log("Starting decrementBalanceAction with formData:", Object.fromEntries(formData.entries()));

    if (!formData) {
        return {
            errors: {
                _errors: "No form data provided"
            }
        };
    }

    try {
        const data = Object.fromEntries(formData.entries());
        const result = decrementBalanceDataSchema.safeParse(data);

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

        const user = await userRepository.getUser({ email });

        if (!user) {
            return {
                formData,
                errors: {
                    _errors: "User does not exist"
                }
            };
        }

        if (user.balance < sum) {
            return {
                formData,
                errors: {
                    _errors: "Insufficient funds"
                }
            };
        }

        try {
            const withdrawResult = await createdWithdraws(
                sum, 
                "WITHDRAW", 
                "ADMINRECHARGE", 
                user.id
            ).catch(error => {
                return null;
            });

            const transactionResult = await createTransaction(sum, "WITHDRAW", "ADMINRECHARGE", user.id)

            if (!withdrawResult) {
                return {
                    formData,
                    errors: {
                        _errors: "Failed to create withdrawal record"
                    }
                };
            }

            const balanceResult = await decrementBalance(user.id, sum);

            if (!balanceResult.success) {
                return {
                    formData,
                    errors: {
                        _errors: balanceResult.error || "Failed to update balance"
                    }
                };
            }

            return { 
                formData,
                errors: undefined
            };

        } catch (error) {
            return {
                formData,
                errors: {
                    _errors: error instanceof Error ? error.message : "Failed to process withdrawal"
                }
            };
        }

    } catch (error) {
        if (error instanceof Error) {
            return {
                formData,
                errors: {
                    _errors: error.message
                }
            };
        }
        return {
            formData,
            errors: {
                _errors: "An unexpected error occurred"
            }
        };
    }
}