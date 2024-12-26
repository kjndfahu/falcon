'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {BalanceType} from "@/features/admin-users/ui/balance-type";
import {useState} from "react";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {useActionState} from "@/shared/lib/react";
import {ErrorMessage} from "@/features/auth/ui/error-message";
import { handleBalanceForm } from "../actions/handle-balance-form";
import {blockUserAction, BlockUserState} from "@/features/admin-users/actions/block-user";
import {unblockUserAction, UnblockUserState} from "@/features/admin-users/actions/unblock-user";
import {BlockUserInput} from "@/features/admin-users/ui/block-user-input";
import {handleBlockForm} from "@/features/admin-users/actions/handle-block-form";

interface Props{
    activeModal: string;
    setActiveModal: (activeModal: string) => void;
}

export const BlockUserModal: React.FC<Props> = ({activeModal, setActiveModal}) => {
    const [activeType, setActiveType] = useState('Заблокировать');
    const [formState] = useActionState(blockUserAction, {} as BlockUserState);
    const [formUnblock] = useActionState(unblockUserAction, {} as UnblockUserState);

    const handleSubmit = async (formData: FormData) => {
        const result = await handleBlockForm(activeType, formData);
        if (result && !result.errors) {
            setActiveModal(null);
        }
    };

    // @ts-ignore
    return (
        <div className="flex items-center justify-center z-[10] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <form
                action={handleSubmit}
                className="flex flex-col w-[800px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]"
            >
                <div className="flex items-center w-full text-black justify-between">
                    Пополнить / Снять деньги
                    <div className="cursor-pointer" onClick={() => setActiveModal(null)}>
                        <XLogo/>
                    </div>
                </div>
                <BalanceType label1="Заблокировать" label2="Разблокировать" activeType={activeType} setActiveType={setActiveType}/>
                {activeType === 'Заблокировать'
                    ? <BlockUserInput {...formState} />
                    : <BlockUserInput {...formUnblock} />
                }
                <ErrorMessage error={
                    activeType === 'Пополнить'
                        ? formState.errors?._errors
                        : formUnblock.errors?._errors
                }/>
                <BlueBtn
                    styles="w-full"
                    title="Submit"
                />
            </form>
        </div>
    );
};