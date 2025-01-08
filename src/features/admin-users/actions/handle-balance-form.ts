'use server'

import { addBalanceAction } from "./add-balance";
import { decrementBalanceAction } from "./decrement-balance";

export async function handleBalanceForm(activeType: string, formData: FormData) {
    try {
        console.log('Handling balance form:', {
            type: activeType,
            email: formData.get('email'),
            sum: formData.get('sum')
        });

        const result = activeType === 'Пополнить' 
            ? await addBalanceAction({}, formData)
            : await decrementBalanceAction({}, formData);

        console.log('Balance action result:', result);

        if (result.errors) {
            return {
                formData,
                errors: result.errors
            };
        }

        return result;
    } catch (error) {
        console.error('Handle balance form error:', error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Operation failed"
            }
        };
    }
} 