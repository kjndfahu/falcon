'use client'
import {Button} from "@/shared/ui/button";
import { useState } from "react";
import { sendVerificationEmail } from "@/features/auth/actions/send-verification-email";
import {MailVerificationModal} from "@/features/settings/ui/mail-verification-modal";
import {ChangePasswordModal} from "@/features/settings/ui/change-password-modal";
import { useRouter } from "next/navigation";
import { RestorePasswordModal } from "./restore-password-modal";

interface Props {
    className?:string;
}

export const ChangePassword: React.FC<Props> = ({className }) => {
    const [isModal, setModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            const formData = new FormData();
            formData.append('email', email);

            const result = await sendVerificationEmail({}, formData);

            if (result.success && result.verificationCode) {
                setVerificationCode(result.verificationCode);
                setShowVerificationModal(true);
            }
        }
    };

    const handleModalClose = (success: boolean) => {
        setModal(false);
        if (success) {
            router.push('/personal-cabinet');
        }
    };

    if (showPasswordModal) {
        return <RestorePasswordModal setModal={setModal} email={email} />;
    }

    if (showVerificationModal) {
        return (
            <MailVerificationModal
                email={email}
                expectedCode={verificationCode}
                onVerificationComplete={() => {
                    setShowVerificationModal(false);
                    setShowPasswordModal(true);
                }}
                onResendCode={async () => {
                    const formData = new FormData();
                    formData.append('email', email);
                    const result = await sendVerificationEmail({}, formData);
                    if (result.success && result.verificationCode) {
                        setVerificationCode(result.verificationCode);
                        return true;
                    }
                    return false;
                }}
            />
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-[#0A131D] sml:w-auto w-full gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label>Your email</label>
                <div className="rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
            </div>
            <Button
                title="Next"
                type="submit"
                styles="items-center justify-center py-[18px] rounded-[15px] text-white bg-[#0A131D]"
            />
        </form>
    );
};