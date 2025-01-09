"use server";

import { sessionService } from "@/enteties/user/services/session";
import { cookies } from "next/headers";

type SignOutResult = {
    success: boolean;
    redirectUrl?: string;
    error?: string;
};

export async function signOutAction(): Promise<SignOutResult> {
    try {
        await sessionService.deleteSession();

        const cookieStore = await cookies();
        const allCookies = cookieStore.getAll();

        allCookies.forEach(cookie => {
            if (cookie.name) {
                cookieStore.delete(cookie.name);
            }
        });

        return {
            success: true,
            redirectUrl: '/'
        };
    } catch (error) {
        console.error('Sign out error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to sign out'
        };
    }
}