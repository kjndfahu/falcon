"use client";

import React from "react";
import { createDepositAction } from "@/features/account-info/actions/deposit";

interface Props {
    title: string;
    styles?: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

export const BlueBtn: React.FC<Props> = ({ 
    styles, 
    title, 
    onClick,
    type = "button"
}) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className={`flex items-center text-white font-normal ${styles} justify-center text-[18px] leading-[23px] py-[13px] bg-[#0057FF] rounded-[15px] cursor-pointer`}
        >
            {title}
        </button>
    );
};
