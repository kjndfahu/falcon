"use client";

import React from "react";
import { createDepositAction } from "@/features/account-info/actions/deposit";

interface Props {
    title: string;
    styles?: string;
    amount?: number;
    userId?: number;
    isUsed?: boolean;
    onSuccess?: (result: any) => void;
}

export const BlueBtn: React.FC<Props> = ({ styles, title, amount = 0, userId = 5340, isUsed, onSuccess }) => {
    const handleClick = async () => {
        try {
            const result = await createDepositAction(amount, "TOPUP", 'USDT', userId);
            if (result.success) {
                console.log("Deposit created successfully:", result.data);
                onSuccess?.(result);
            } else {
                console.error("Failed to create deposit:", result.error);
            }
        } catch (error) {
            console.error("Error creating deposit:", error);
        }
    };

    return (
        <button onClick={isUsed ? handleClick : undefined} type="submit" className={`flex items-center text-white font-normal ${styles} justify-center text-[18px] leading-[23px]  py-[13px] bg-[#0057FF] rounded-[15px] cursor-pointer`}>
            {title}
        </button>
    );
};
