'use client'
import {Button} from "@/shared/ui/button";
import { useState, useTransition } from "react";
import { useActionState } from "@/shared/lib/react";
import { changeMailAction } from "../actions/change-mail";
import { MailVerificationModal } from "./mail-verification-modal";
import { sendVerificationEmail } from "@/features/auth/actions/send-verification-email";
import { useSession } from "next-auth/react";

interface Props {
    setModal: (isModal: boolean) => void;
    currentEmail: string;
}

export const ChangeMailModal: React.FC<Props> = ({ setModal, currentEmail }) => {
    const [formState, action] = useActionState(changeMailAction, {});
    const [showVerification, setShowVerification] = useState(false);
    const [showNewEmailForm, setShowNewEmailForm] = useState(false);
    const [email, setEmail] = useState(currentEmail);
    const [newEmail, setNewEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isPending, startTransition] = useTransition();
    const { update } = useSession();

    const handleCurrentEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email !== currentEmail) {
            return;
        }
        
        startTransition(async () => {
            try {
                const formData = new FormData();
                formData.append('email', email);
                
                const result = await sendVerificationEmail({}, formData);
                if (result.success && result.verificationCode) {
                    setVerificationCode(result.verificationCode);
                    setShowVerification(true);
                }
            } catch (error) {
                console.error("Error sending verification:", error);
            }
        });
    };

    const handleNewEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        startTransition(async () => {
            try {
                const formData = new FormData();
                formData.append('email', currentEmail);
                formData.append('newEmail', newEmail);

                const result = await action(formData);
                if (result && !result.errors) {
                    await update({
                        email: newEmail
                    });
                    
                    setModal(false);
                    window.location.reload();
                }
            } catch (error) {
                console.error('Error changing email:', error);
            }
        });
    };

    if (showVerification) {
        return (
            <MailVerificationModal 
                email={email}
                expectedCode={verificationCode}
                onVerificationComplete={() => {
                    setShowVerification(false);
                    setShowNewEmailForm(true);
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

    if (showNewEmailForm) {
        return (
            <form onSubmit={handleNewEmailSubmit} className="flex flex-col text-[#0A131D] gap-[25px]">
                <div className="flex flex-col text-[18px] gap-3">
                    <label>New Email</label>
                    <div className="rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                        <input
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            placeholder="Enter new email"
                            required
                            className="bg-transparent w-full focus:outline-none focus:ring-0"
                        />
                    </div>
                    {formState.errors?._errors && (
                        <div className="text-red-500">{formState.errors._errors}</div>
                    )}
                </div>
                <Button
                    title="Change Email"
                    type="submit"
                    isPending={isPending}
                    styles="items-center justify-center py-[18px] rounded-[15px] text-white bg-[#0A131D]"
                />
            </form>
        );
    }

    return (
        <form onSubmit={handleCurrentEmailSubmit} className="flex flex-col text-[#0A131D] w-full gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label>Current Email</label>
                <div className="rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter current email"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
            </div>
            <Button
                title="Next"
                type="submit"
                isPending={isPending}
                styles="items-center justify-center py-[18px] rounded-[15px] text-white bg-[#0057FF]"
            />
        </form>
    );
};