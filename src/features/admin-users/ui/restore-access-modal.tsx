'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {restoreAccessAction} from "@/features/admin-users/actions/restore-access";
import {RestoreAccessInput} from "@/features/admin-users/ui/restore-access-input";
import { useFormState } from 'react-dom'

interface Props {
    activeModal: string | null;
    setActiveModal: (modal: string | null) => void;
}

export const RestoreAccessModal: React.FC<Props> = ({activeModal, setActiveModal}) => {
    const [formState, formAction] = useFormState(restoreAccessAction, {
        formData: undefined,
        errors: undefined
    });

    return (
        <div className="flex items-center justify-center z-[10] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <form
                action={async (formData: FormData) => {
                    const result = await formAction(formData);
                    if (result && !result.errors?._errors) {
                        setActiveModal(null);
                    }
                }}
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
                />
            </form>
        </div>
    );
};