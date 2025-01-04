"use client";

import React from "react";

interface Props {
    title: string;
    styles?: string;
    type?: "button" | "submit";
    isPending?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export const BlueBtn: React.FC<Props> = ({ 
    styles = "", 
    title,
    type = "button",
    isPending = false,
    onClick,
    disabled = false
}) => {
    return (
        <button 
            onClick={onClick}
            type={type}
            disabled={disabled || isPending}
            className={`flex items-center text-white font-normal ${styles} justify-center text-[18px] leading-[23px] py-[13px] bg-[#0057FF] rounded-[15px] cursor-pointer ${(disabled || isPending) ? 'opacity-50' : ''}`}
        >
            {isPending ? "Processing..." : title}
        </button>
    );
};
