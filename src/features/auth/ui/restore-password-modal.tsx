'use client'
import {Button} from "@/shared/ui/button";
import {ClosedEye, OpenEye} from "@/shared/ui/pc-icons";
import {useState} from "react";
import { useActionState } from "@/shared/lib/react";
import { changePasswordAction } from "@/features/settings/actions/change-password";
import { useRouter } from "next/navigation";

interface Props {
    setModal: (isModal: boolean) => void;
    email: string;
}

export const RestorePasswordModal: React.FC<Props> = ({ setModal, email }) => {
    const [passEye, setPassEye] = useState(false);
    const [confirmPassEye, setConfirmPassEye] = useState(false);
    const [formState, formAction] = useActionState(changePasswordAction, {});
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        formData.append('email', email);

        try {
            const result = await formAction(formData);
            if (!result?.errors) {
                setModal(false);
                router.push('/personal-cabinet');
            }
        } catch (error) {
            console.error('Error changing password:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-[#0A131D] sml:w-auto w-full gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label>New Password</label>
                <div className="flex justify-between rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        name="password"
                        type={passEye ? "text" : "password"}
                        placeholder="Enter new password"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                    <div className="cursor-pointer" onClick={() => setPassEye(!passEye)}>
                        {passEye ? <OpenEye/> : <ClosedEye/>}
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-[18px] gap-3">
                <label>Confirm New Password</label>
                <div className="flex justify-between rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        name="confirmPassword"
                        type={confirmPassEye ? "text" : "password"}
                        placeholder="Confirm New Password"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                    <div className="cursor-pointer" onClick={() => setConfirmPassEye(!confirmPassEye)}>
                        {confirmPassEye ? <OpenEye/> : <ClosedEye/>}
                    </div>
                </div>
            </div>
            {formState.errors?._errors && (
                <div className="text-red-500">{formState.errors._errors}</div>
            )}
            <Button 
                title="Change Password" 
                type="submit"
                styles="items-center justify-center py-[18px] rounded-[15px] text-white bg-[#0A131D]"
            />
        </form>
    );
}; 