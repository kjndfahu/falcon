"use server";

import { setAutoRenew } from "@/enteties/subscription/repositories/subscription";

export type ToggleAutoRenewState = {
    success?: boolean;
    error?: string;
};

export async function toggleAutoRenewAction(
    trackingNumber: number,
    autorenew: boolean
): Promise<ToggleAutoRenewState> {
    try {
        await setAutoRenew(trackingNumber, autorenew);
        return { success: true };
    } catch (error) {
        console.error("Error toggling auto-renew:", error);
        return {
            error: "Failed to update auto-renew status"
        };
    }
} 