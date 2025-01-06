"use server";

import { setAutoRenew } from "@/enteties/subscription/repositories/subscription";

export type ToggleSwitcherState = {
    errors?: {
        _errors?: string;
    };
    success?: boolean;
};

export async function handleToggleSwitcher(
    trackingNumber: number,
    autorenew: boolean
): Promise<ToggleSwitcherState> {
    try {
        await setAutoRenew(trackingNumber, autorenew);
        return { success: true };
    } catch (error) {
        console.error("Error toggling auto-renew:", error);
        return {
            errors: {
                _errors: "Failed to update auto-renew status"
            }
        };
    }
}