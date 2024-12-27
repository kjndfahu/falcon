'use server'

import { z } from 'zod';
import { userRepository } from '@/enteties/user/repositories/user';

const unblockUserSchema = z.object({
    email: z.string().email()
});

export async function unblockUserAction(prevState: any, formData: FormData) {
    console.log('Unblock user action started');
    const data = Object.fromEntries(formData.entries());
    const result = unblockUserSchema.safeParse(data);

    if (!result.success) {
        return {
            formData,
            errors: {
                email: result.error.flatten().fieldErrors.email?.join(', '),
                _errors: result.error.flatten().formErrors.join(', ')
            }
        };
    }

    try {
        const user = await userRepository.getUser({ email: result.data.email });
        if (!user) {
            return {
                formData,
                errors: {
                    _errors: "User not found"
                }
            };
        }

        await userRepository.unblockUser(result.data.email);
        return { formData, errors: {} };
    } catch (error) {
        console.error('Unblock user error:', error);
        return {
            formData,
            errors: {
                _errors: "Failed to unblock user"
            }
        };
    }
} 