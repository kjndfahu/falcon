'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {BalanceType} from "@/features/admin-users/ui/balance-type";
import {useState} from "react";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {BlockUserForm} from "@/features/admin-users/ui/block-user-form";
import {UnblockUserForm} from "@/features/admin-users/ui/unblock-user-form";
import {useActionState} from "@/shared/lib/react";
import {blockUserAction, BlockUserState} from "@/features/admin-users/actions/block-user";
import {unblockUserAction, UnblockUserState} from "@/features/admin-users/actions/unblock-user";

interface Props{
    activeModal: string;
    setActiveModal: (activeModal: string) => void;
}

export const BlockUserModal: React.FC<Props> = ({activeModal, setActiveModal}) => {
    const [activeType, setActiveType] = useState('Заблокировать');
    const [blockFormState, blockAction] = useActionState(blockUserAction, {} as BlockUserState);
    const [unblockFormState, unblockAction] = useActionState(unblockUserAction, {} as UnblockUserState);

    const handleSubmit = async (formData: FormData) => {
        try {
            let result;
            if (activeType === 'Заблокировать') {
                result = await blockAction(formData);
            } else {
                result = await unblockAction(formData);
            }

            if (result && !result.errors?._errors) {
                setActiveModal('');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="flex items-center justify-center z-[10] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <form
                action={handleSubmit}
                className="flex flex-col w-[800px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]"
            >
                <div className="flex items-center w-full text-black justify-between">
                    Заблокировать / Разблокировать
                    <div className="cursor-pointer" onClick={() => setActiveModal('')}>
                        <XLogo/>
                    </div>
                </div>
                <BalanceType 
                    label1="Заблокировать" 
                    label2="Разблокировать" 
                    activeType={activeType} 
                    setActiveType={setActiveType}
                />
                {activeType === 'Заблокировать'
                    ? <BlockUserForm {...blockFormState}/>
                    : <UnblockUserForm {...unblockFormState}/>
                }
                {activeType === 'Заблокировать' && blockFormState.errors?._errors && (
                    <div className="text-red-500">{blockFormState.errors._errors}</div>
                )}
                {activeType === 'Разблокировать' && unblockFormState.errors?._errors && (
                    <div className="text-red-500">{unblockFormState.errors._errors}</div>
                )}
                <BlueBtn
                    styles="w-full"
                    title="Submit"
                    type="submit"
                    isUsed={false}
                />
            </form>
        </div>
    );
};