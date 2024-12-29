'use client'
import {useState} from "react";
import {Modal} from "@/shared/ui/modal";
import {UserAndBalanceModal} from "@/features/dashboard/ui/user-and-balance-modal";

interface Props{
    className?:string;
    sum: number;
    userAndBalance: {
        id: number;
        balance: number;
    }[];
}

export const BalanceCount:React.FC<Props> = ({ sum, userAndBalance, className}) => {
    const [isActive, setActive] = useState(false);
    return (
        <div onClick={() => setActive(true)} className="flex flex-col text-[18px] font-semibold text-black gap-[40px]">
            Суммарный баланс пользователей
            <h3 className="text-[42px] font-semibold text-[#101D2C]">{sum}$</h3>
            {isActive && ( <Modal title="Активных подписок" setModal={setActive} isModal={isActive} child={ <UserAndBalanceModal userAndBalance={userAndBalance}/> } /> )}
        </div>
    )
}