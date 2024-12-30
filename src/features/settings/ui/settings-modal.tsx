'use client'
import {Button} from "@/shared/ui/button";
import { useState } from "react";
import { ChangePasswordModal } from "./change-password-modal";

interface Props {
    setModal: (isModal: boolean) => void;
}

export const SettingsModal: React.FC<Props> = ({ setModal }) => {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setShowPasswordModal(true);
        }
    };

    if (showPasswordModal) {
        return <ChangePasswordModal setModal={setModal} email={email} />;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-[#0A131D] gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label>Your email</label>
                <div className="rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
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