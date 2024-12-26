'use client'
import {useBalanceStore} from "@/shared/store/balance";
import {useEffect} from "react";
import {SessionEntity} from "@/enteties/user/domain";

interface Props {
    title: string;
    num?: number;
    btn?: React.ReactNode;
    balance?: number;
    session: SessionEntity;
}

export const PcBlock: React.FC<Props> = ({title, num = 0, btn, balance = 0, session}) => {
    const setBalance = useBalanceStore((state) => state.setBalance);
    const storeBalance = useBalanceStore((state) => state.balance);

    useEffect(() => {
        if (balance) {
            setBalance(balance);
        }
    }, [balance, setBalance]);
    const formatBalance = (balance: number) => {
        const absBalance = Math.abs(balance);
        return `$${absBalance.toFixed(2)}`;
    };

    return (
        <div
            className="flex gap-[40px] w-[413px] flex-col px-[25px] pt-[28px] pb-[34px] border-[1px] text-black text-[14px] rounded-[15px] border-[#BEDAE9]">
            {title}
            <div className="flex items-center justify-between font-bold text-[42px] leading-[45px] text-[#101D2C]">
                <h3>{storeBalance < 0 ? '-' : ''}{formatBalance(storeBalance)}</h3>
                {btn}
            </div>
        </div>
    );
};