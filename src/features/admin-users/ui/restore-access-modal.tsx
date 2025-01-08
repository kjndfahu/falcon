'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {restoreAccessAction} from "@/features/admin-users/actions/restore-access";
import {RestoreAccessInput} from "@/features/admin-users/ui/restore-access-input";
import { useActionState } from '@/shared/lib/react';

interface Props {
    activeModal: string | null;
    setActiveModal: (modal: string | null) => void;
}

export const RestoreAccessModal: React.FC<Props> = ({activeModal, setActiveModal}) => {
    const [formState, action, isPending] = useActionState(restoreAccessAction, {
        formData: undefined,
        errors: undefined
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const result = await action(formData);
        if (result && !result.errors) {
            setActiveModal(null);
        }
    };

    return (
        <div className="flex items-center justify-center z-[10] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[800px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]"
            >
                <div className="flex items-center w-full text-black justify-between">
                    Восстановить доступ
                    <div className="cursor-pointer" onClick={() => setActiveModal(null)}>
                        <XLogo/>
                    </div>
                </div>
                <RestoreAccessInput {...formState}/>
                {formState.errors?._errors && (
                    <div className="text-red-500">{formState.errors._errors}</div>
                )}
                <BlueBtn
                    styles="w-full"
                    title="Submit"
                    isPending={isPending}
                    type="submit"
                />
            </form>
        </div>
    );
};