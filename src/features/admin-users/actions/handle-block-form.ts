'use server'

import {blockUserAction} from "@/features/admin-users/actions/block-user";
import {unblockUserAction} from "@/features/admin-users/actions/unblock-user";

export async function handleBlockForm(type: string, formData: FormData) {
    try {
        return type === 'Заблокировать'
            ? await blockUserAction({}, formData)
            : await unblockUserAction({}, formData);
    } catch (error) {
        console.error("Handle block form error:", error);
        return {
            formData,
            errors: {
                _errors: "Failed to process request"
            }
        };
    }
}