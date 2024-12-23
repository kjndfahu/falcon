'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {ChangeRoleInput} from "@/features/admin-users/ui/change-role-inputs";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {useActionState} from "@/shared/lib/react";
import {changeRoleAction, ChangeRoleState} from "@/features/admin-users/actions/change-role";

interface Props{
    activeModal: string | null;
    setActiveModal: (modal: string | null) => void;
}

export const ChangeRoleModal: React.FC<Props> = ({activeModal, setActiveModal}) => {
    const [formState, action] = useActionState(changeRoleAction, {} as ChangeRoleState);

    return (
        <div 
            className="flex z-[10] items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setActiveModal(null);
                }
            }}
        >
            <div 
                className="flex flex-col w-[800px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]"
                onClick={e => e.stopPropagation()}
            >
                <form 
                    action={async (formData: FormData) => {
                        const result = await action(formData);
                        if (result && !result.errors) {
                            setActiveModal(null);
                        }
                    }}
                    className="w-full flex flex-col gap-[50px]"
                >
                    <div className="flex items-center w-full text-black justify-between">
                        Сменить роль
                        <div className="cursor-pointer" onClick={() => setActiveModal(null)}>
                            <XLogo/>
                        </div>
                    </div>
                    <ChangeRoleInput {...formState}/>
                    <BlueBtn
                        styles="w-full"
                        title="Submit"
                    />
                </form>
            </div>
        </div>
    );
};