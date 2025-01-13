import {router} from "next/client";
import {signOut} from "next-auth/react";
import {signOutAction} from "@/features/auth/actions/sign-out";

export const handleLogout = async () => {
    try {
        const result = await signOutAction();

        if (result.success) {
            await signOut({ redirect: false });

            if (typeof window !== 'undefined') {
                localStorage.clear();
                sessionStorage.clear();
            }

            router.push(result.redirectUrl || '/');
        } else {
            console.error('Logout failed:', result.error);
        }
    } catch (error) {
        console.error("Logout error:", error);
    }
};