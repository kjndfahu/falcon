'use client'
import React from 'react';
import {GoogleButton} from "@/features/auth/ui/google-button";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { useState } from "react";

interface Props {
    fields?: React.ReactNode;
    titlebtn: string;
    maintitle: string;
    actions: React.ReactNode;
    errors: React.ReactNode;
    terms?: React.ReactNode;
    action?: (formData: FormData) => void;
}

export const AuthFormLayout: React.FC<Props> = ({ 
    actions, 
    errors, 
    action, 
    terms, 
    fields, 
    maintitle 
}) => {
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const currentPath = usePathname();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (action) {
            const formData = new FormData(e.currentTarget);
            await action(formData);
        }
    };

    return (
        <div className="flex flex-col w-full text-[#0A131D] text-[32px] font-semibold">
            <h3>{maintitle}</h3>
            <form onSubmit={handleSubmit}>
                {fields}
                {errors}
                {terms}
                {actions}
            </form>
            <GoogleButton />
            <div className="flex sml:flex-row flex-col w-full sml:items-center items-start sml:gap-0 gap-3 justify-between sml:pt-[25px] pt-[50px] font-normal">
                {currentPath === '/sign-up' ? (
                    <>
                        <div className="flex text-[18px] gap-1 text-[#67748E]">Already have an account?
                            <Link href="/sign-in">
                                <span className="text-[#0A131D] underline">Log In</span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="text-[18px] text-[#67748E]">Forgot your</p>
                            <Link className="text-[#0A131D] text-[18px] underline" href="/change-password">
                                <span
                                    className="text-[#0A131D] text-[18px] underline">password</span>
                            </Link>
                        </div>


                    </>
                ) : (
                    <>
                        <div className="flex text-[18px] gap-1 text-[#67748E]">Dont have account yet?
                            <Link href="/sign-up">
                                <span className="text-[#0A131D] underline">Sign Up</span>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};