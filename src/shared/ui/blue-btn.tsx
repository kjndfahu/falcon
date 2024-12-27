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
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const BlueBtn: React.FC<Props> = ({ 
    styles, 
    title, 
    amount, 
    userId, 
    isUsed, 
    onSuccess,
    onClick,
    type = "submit"
}) => {
    const handleClick = async (e: React.MouseEvent) => {
        if (!isUsed) {
            onClick?.();
            return;
        }
        
        e.preventDefault();
        try {
            const result = await createDepositAction(amount || 0, "TOPUP", 'USDT', userId || 0);
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
        <button 
            onClick={handleClick} 
            type={type}
            className={`flex items-center text-white font-normal ${styles} justify-center text-[18px] leading-[23px] py-[13px] bg-[#0057FF] rounded-[15px] cursor-pointer`}
        >
            {title}
        </button>
    );
};
