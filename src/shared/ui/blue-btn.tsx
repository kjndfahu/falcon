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
    const handleClick = (e: React.MouseEvent) => {
        if (type === "button" && onClick) {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <button 
            onClick={handleClick}
            type={type}
            disabled={disabled || isPending}
            className={`flex items-center text-white font-normal ${styles} justify-center text-[18px] leading-[23px] py-[13px] bg-[#0057FF] rounded-[15px] cursor-pointer ${(disabled || isPending) ? 'opacity-50' : 'hover:bg-[#0045CC]'}`}
        >
            {isPending ? "Processing..." : title}
        </button>
    );
};
