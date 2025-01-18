'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REFERRAL_CODE_KEY = 'referral_code';

export function useReferralCode() {
    const pathname = usePathname();

    useEffect(() => {
        // Если мы на странице sign-up с реферальным кодом
        if (pathname.startsWith('/sign-up/')) {
            const code = pathname.split('/')[2];
            if (code) {
                localStorage.setItem(REFERRAL_CODE_KEY, code);
            }
        }
    }, [pathname]);

    const getReferralCode = () => {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(REFERRAL_CODE_KEY);
    };

    const clearReferralCode = () => {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(REFERRAL_CODE_KEY);
    };

    return {
        getReferralCode,
        clearReferralCode
    };
}
