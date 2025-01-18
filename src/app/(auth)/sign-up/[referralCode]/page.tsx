'use client'

import {SignUpForm} from "@/features/auth/containers/sign-up-form";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

const REFERRAL_CODE_KEY = 'referral_code';

export default function SignUpPage() {
    const params = useParams();
    const referralCode = params?.referralCode as string;

    useEffect(() => {
        if (referralCode) {
            // Устанавливаем cookie на клиенте с большим сроком действия
            document.cookie = `${REFERRAL_CODE_KEY}=${referralCode}; path=/; max-age=3600`;
        }
    }, [referralCode]);

    return (
        <div className="flex sml:w-auto w-full xl:px-[248px] lg:px-[150px] mdbvp:px-[100px] sml:px-[50px] px-[20px] items-center justify-center md:min-h-screen">
            <SignUpForm/>
        </div>
    );
}