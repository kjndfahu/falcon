'use server'

import { addBalanceAction } from "./add-balance";
import { decrementBalanceAction } from "./decrement-balance";

export async function handleBalanceForm(type: string, formData: FormData) {
    try {
        return type === 'Пополнить'
            ? await addBalanceAction({}, formData)
            : await decrementBalanceAction({}, formData);
    } catch (error) {
        console.error("Handle balance form error:", error);
        return {
            formData,
            errors: {
                _errors: "Failed to process request"
            }
        };
    }
} 