'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {BalanceType} from "@/features/admin-users/ui/balance-type";
import {useState} from "react";
import {AddBalanceForm} from "@/features/admin-users/ui/add-balance-form";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {useActionState} from "@/shared/lib/react";
import {addBalanceAction, AddBalanceState} from "@/features/admin-users/actions/add-balance";
import {ErrorMessage} from "@/features/auth/ui/error-message";
import {DecrementBalanceForm} from "@/features/admin-users/ui/decrement-balance-modal";
import {decrementBalanceAction, DecrementBalanceState} from "@/features/admin-users/actions/decrement-balance";
import { handleBalanceForm } from "../actions/handle-balance-form";

interface Props{
    activeModal: string;
    setActiveModal: (activeModal: string) => void;
}

export const AddBalanceModal: React.FC<Props> = ({activeModal, setActiveModal}) => {
    const [activeType, setActiveType] = useState('Пополнить');
    const [formState] = useActionState(addBalanceAction, {} as AddBalanceState);
    const [formDecrementState] = useActionState(decrementBalanceAction, {} as DecrementBalanceState);

    const handleSubmit = async (formData: FormData) => {
        const result = await handleBalanceForm(activeType, formData);
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
                <BalanceType label1="Пополнить" label2="Снять" activeType={activeType} setActiveType={setActiveType}/>
                {activeType === 'Пополнить'
                    ? <AddBalanceForm {...formState} />
                    : <DecrementBalanceForm {...formDecrementState} />
                }
                <ErrorMessage error={
                    activeType === 'Пополнить'
                        ? formState.errors?._errors
                        : formDecrementState.errors?._errors
                }/>
                <BlueBtn
                    styles="w-full"
                    title="Submit"
                />
            </form>
        </div>
    );
};