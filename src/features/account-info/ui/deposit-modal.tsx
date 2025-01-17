'use client'
import {BlueBtn} from "@/shared/ui/blue-btn";
import {useAmountInput} from "@/features/account-info/model/useInput";
import {useBalanceStore} from "@/shared/store/balance";
import { useState } from "react";
import { createDepositAction } from "@/features/account-info/actions/deposit";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
    balance?: number;
    userId?: number;
}

export const DepositModal: React.FC<Props> = ({balance, userId}) => {
    const {amount, handleChange} = useAmountInput();
    const [isPending, setIsPending] = useState(false);
    const setBalance = useBalanceStore((state) => state.setBalance);
    const router = useRouter();
    const userString = String(userId);

    const handleDeposit = async () => {
        if (!amount || isNaN(parseFloat(amount))) {
            return;
        }

        if(!userId){
            return;
        }

        setIsPending(true);
        try {
            const result = await createDepositAction(parseFloat(amount), "TOPUP", 'USDT', parseInt(userString));
            if (result.success && result.data?.updatedBalance) {
                toast.success("Deposit successfully created!");
                setBalance(result.data.updatedBalance);
                router.refresh();
            }
        } catch (error) {
            toast.error("Error creating deposit!");
            console.error("Error creating deposit:", error);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <>
            <div className="flex sml:flex-row sml:items-center w-full items-start flex-col gap-[25px]">
                <div className="flex flex-col w-[242px] rounded-[15px] gap-[37px] bg-[linear-gradient(113.87deg,_#212121_2.05%,_#393939_97.95%)] text-white text-[16px] px-[25px] py-[28px]">
                    Balance
                    <h3 className="text-[42px] leading-[44px] font-semibold">
                        ${balance?.toFixed(2)}
                    </h3>
                </div>
                <div className="flex flex-col justify-center sml:w-auto w-full gap-[25px] text-black font-medium text-[16px] rounded-[15px] border-[1px] border-[#BEDAE9] px-[25px] sml:py-[25px] py-[28px] bg-[#F3F8FD]">
                    <h3>Account replenishment</h3>
                    <div className="flex sml:flex-row flex-col gap-[25px]">
                        <div className="border-[1px] md:w-[309px] px-[16px] py-[19px] text-[18px] leading-[22px] rounded-[15px] border-[#DDE6EF]">
                            <input
                                placeholder="$ 5.00"
                                className="bg-transparent w-full focus:outline-none focus:ring-0"
                                type="text"
                                value={amount}
                                onChange={handleChange}
                            />
                        </div>
                        <BlueBtn 
                            title="Payment" 
                            styles="w-[215px]"
                            type="button"
                            onClick={handleDeposit}
                            isPending={isPending}
                            disabled={!amount || isNaN(parseFloat(amount))}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-[25px] flex-col py-[18px] px-[25px] text-black font-medium text-[16px] border-[1px] rounded-[15px] border-[#BEDAE9]">
                <h3>Select a payment method</h3>
                <div className="flex gap-[25px]">
                    <div className="flex items-center bg-[#212121] justify-center text-white rounded-[15px] text-[18px] font-semibold w-[106px] h-[72px]">
                        PAYEER
                    </div>
                    <div className="flex items-center bg-[#0057FF] justify-center text-white rounded-[15px] text-[18px] font-semibold w-[106px] h-[72px]">
                        CRYPTO
                    </div>
                </div>
            </div>
        </>
    );
};