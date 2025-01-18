'use client'

import { signIn } from "next-auth/react"
import {GoogleLogo} from "@/shared/ui/pc-icons";
import { usePathname } from 'next/navigation';

interface GoogleButtonProps {
    referralCode?: string;
}

export function GoogleButton({ referralCode }: GoogleButtonProps) {
    const handleGoogleSignIn = async () => {
        try {
            await signIn('google', {
                callbackUrl: '/personal-cabinet',
                redirect: true
            });
        } catch (error) {
            console.error('Google sign in error:', error);
        }
    };

    return (
        <button
            onClick={handleGoogleSignIn}
            className="flex mt-[25px] items-center justify-center gap-2 w-full py-4 text-[18px] font-light rounded-[15px] border border-[#DDE6EF] hover:bg-gray-50"
        >
            <GoogleLogo/>
            Continue with Google
        </button>
    )
}