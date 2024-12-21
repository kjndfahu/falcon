'use client'

import { signIn } from "next-auth/react"
import {GoogleLogo} from "@/shared/ui/pc-icons";

export function GoogleButton() {
    return (
        <button
            onClick={() => signIn('google', { 
                callbackUrl: '/personal-cabinet',
                redirect: true
            })}
            className="flex mt-[25px] items-center justify-center gap-2 w-full py-4 text-[18px] font-light rounded-[15px] border border-[#DDE6EF] hover:bg-gray-50"
        >
            <GoogleLogo/>
            Continue with Google
        </button>
    )
} 