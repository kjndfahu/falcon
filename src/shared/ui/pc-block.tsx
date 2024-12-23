'use client'
import {useState} from "react";
import {Modal} from "@/shared/ui/modal";
import {DepositModal} from "@/features/account-info/ui/deposit-modal";
import {SessionEntity} from "@/enteties/user/domain";
import {useBalanceStore} from "@/shared/store/balance";

interface Props{
    className?:string,
    title?:string,
    num?:number,
    btn?:React.ReactNode,
    styles?: string;
    balance?:number;
    modal?: React.ReactNode;
    session: SessionEntity;

}

export const PcBlock:React.FC<Props> = ({title, num, btn, styles}) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const getBalance = useBalanceStore((state) => state.balance);
    const fullBalance = getBalance === 0 ? num : getBalance

    return (
        <div className={`flex gap-[40px] w-[413px] ${styles} flex-col px-[25px] pt-[28px] pb-[34px] border-[1px] text-black text-[14px] rounded-[15px] border-[#BEDAE9]`}>
            {title}
            <div className="flex items-center justify-between font-bold text-[42px] leading-[45px] text-[#101D2C]">
                <h3>${fullBalance?.toFixed(2)}</h3>
                <div onClick={() => setIsClicked(true)}>{btn}</div>
            </div>
            {isClicked && ( <Modal title="Deposit" setModal={setIsClicked} isModal={isClicked} child={<DepositModal balance={fullBalance}/>}/> )}
        </div>
    )
}