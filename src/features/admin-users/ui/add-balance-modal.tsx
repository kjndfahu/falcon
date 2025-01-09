'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {BalanceType} from "@/features/admin-users/ui/balance-type";
import {useState} from "react";
import {AddBalanceForm} from "@/features/admin-users/ui/add-balance-form";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {AddBalanceState} from "@/features/admin-users/actions/add-balance";
import {DecrementBalanceForm} from "@/features/admin-users/ui/decrement-balance-modal";
import { DecrementBalanceState} from "@/features/admin-users/actions/decrement-balance";
import { handleBalanceForm } from "../actions/handle-balance-form";

interface Props{
    activeModal: string;
    setActiveModal: (activeModal: string | null) => void;
}

export const AddBalanceModal: React.FC<Props> = ({setActiveModal}) => {
    const [activeType, setActiveType] = useState('Пополнить');
    const [formState, setFormState] = useState<AddBalanceState | DecrementBalanceState>({});
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const result = await handleBalanceForm(activeType, formData);
            console.log('Form submission result:', result);

            setFormState(result);

            if (result && !result.errors) {
                setActiveModal(null);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormState({
                errors: {
                    _errors: 'Failed to process request'
                }
            });
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="flex items-center justify-center z-[10] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <form
                onSubmit={handleSubmit}
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
                    : <DecrementBalanceForm {...formState} />
                }
                <BlueBtn
                    styles="w-full"
                    title="Submit"
                    type="submit"
                    isPending={isPending}
                />
            </form>
        </div>
    );
};