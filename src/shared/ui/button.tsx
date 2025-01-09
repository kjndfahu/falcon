"use client";

import React from "react";
import {EnterLogo} from "@/shared/ui/icons";

interface Props {
    title: string;
    styles?: string;
    type?: "button" | "submit" | "reset";
    isPending?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<Props> = ({
                                            styles = "",
                                            title,
                                            type = "submit",
                                            isPending = false,
                                            onClick,
                                            disabled = false
                                        }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || isPending}
            className={`flex gap-3 items-center justify-center cursor-pointer ${styles} ${(disabled || isPending) ? 'opacity-50' : ''}`}
        >
            <EnterLogo/>
            {isPending ? "Processing..." : title}
        </button>
    );
};