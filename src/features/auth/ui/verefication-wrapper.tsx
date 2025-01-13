"use client";
import {useEffect, useState} from "react";
import { Verification } from "@/features/auth/ui/verification";
import { sendVerificationEmail } from "@/features/auth/actions/send-verification-email";
import {useRouter} from "next/navigation";

export const VerificationWrapper = ({ email }) => {
    const [isPending, setIsPending] = useState(false);
    const [verificationCode, setVerificationCode] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const isAdminVerified = localStorage.getItem("isAdminVerified") === "true";
        if (isAdminVerified) {
            router.push('/admin-users');
        }
        }, [router]);
    const handleVerificationComplete = async (code) => {
        if (code === verificationCode) {
            localStorage.setItem("isAdminVerified", "true");
            router.push('/admin-users');
            return true;
        }
        return false;
    };

    const handleResendCode = async () => {
        setIsPending(true);
        const formData = new FormData();
        formData.append('email', email);

        const verificationResponse = await sendVerificationEmail({}, formData);
        setVerificationCode(verificationResponse.verificationCode);
        setIsPending(false);
        return verificationResponse.success;

    };

    return (
        <div className="md:px-[220px] sm:px-[50px] px-[20px]">
            <Verification
                email={email}
                onVerificationComplete={handleVerificationComplete}
                isPending={isPending}
                onResendCode={handleResendCode}
            />
        </div>
    );
};
