'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {BalanceType} from "@/features/admin-users/ui/balance-type";
import {useState, useTransition} from "react";
import {useActionState} from "@/shared/lib/react";
import {blockUserAction, BlockUserState} from "@/features/admin-users/actions/block-user";
import {unblockUserAction, UnblockUserState} from "@/features/admin-users/actions/unblock-user";

interface Props {
    activeModal: string;
    setActiveModal: (activeModal: string | null) => void;
}

export const BlockUserModal: React.FC<Props> = ({ setActiveModal}) => {
    const [activeType, setActiveType] = useState('Заблокировать');
    const [formState, action] = useActionState(blockUserAction, {} as BlockUserState);
    const [formUnblock, actionUnblock] = useActionState(unblockUserAction, {} as UnblockUserState);
    const [isPending, startTransition] = useTransition();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email) {
            return;
        }

        startTransition(async () => {
            try {
                const formData = new FormData();
                formData.append('email', email);

                if (activeType === 'Заблокировать') {
                    console.log('Blocking user:', email);
                    const result = await action(formData);
                    console.log('Block result:', result);
                    if (!result.errors) {
                        setActiveModal(null);
                    }
                } else {
                    console.log('Unblocking user:', email);
                    const result = await actionUnblock(formData);
                    console.log('Unblock result:', result);
                    if (!result.errors) {
                        setActiveModal(null);
                    }
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        });
    };

    return (
        <div className="flex items-center justify-center z-[10] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[800px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]"
            >
                <div className="flex items-center w-full text-black justify-between">
                    Заблокировать / Разблокировать
                    <div className="cursor-pointer" onClick={() => setActiveModal(null)}>
                        <XLogo/>
                    </div>
                </div>
                <BalanceType 
                    label1="Заблокировать" 
                    label2="Разблокировать" 
                    activeType={activeType} 
                    setActiveType={setActiveType}
                />
                <div className="flex flex-col w-full gap-[15px]">
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="email" className="text-black">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-[#E5E5E5] rounded-[10px] p-[15px]"
                            placeholder="Enter user email"
                            required
                        />
                    </div>
                    {(activeType === 'Заблокировать' ? formState.errors : formUnblock.errors)?._errors && (
                        <span className="text-red-500 text-sm">
                            {(activeType === 'Заблокировать' ? formState.errors : formUnblock.errors)?._errors}
                        </span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isPending || !email}
                    className={`w-full flex items-center justify-center text-white font-normal text-[18px] py-[13px] bg-[#0057FF] rounded-[15px] cursor-pointer ${(isPending || !email) ? 'opacity-50' : ''}`}
                >
                    {isPending ? "Processing..." : "Submit"}
                </button>
            </form>
        </div>
    );
};