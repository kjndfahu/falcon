'use client'
import {useState} from "react";
import {Modal} from "@/shared/ui/modal";
import {UserAndBalanceModal} from "@/features/dashboard/ui/user-and-balance-modal";

interface Props{
    sum: number;
    userAndBalance: {
        id: number;
        balance: number;
    }[];
}

export const BalanceCount:React.FC<Props> = ({ sum, userAndBalance}) => {
    const [isActive, setActive] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActive(true);
    };

    return (
        <>
            <div onClick={handleClick} className="flex flex-col text-[18px] font-semibold text-black gap-[40px] cursor-pointer">
                Суммарный баланс пользователей
                <h3 className="text-[42px] font-semibold text-[#101D2C]">{sum}$</h3>
            </div>
            {isActive && (
                <Modal 
                    styles="w-[80%]" 
                    title="Балансы" 
                    setModal={setActive} 
                    isModal={isActive} 
                    child={<UserAndBalanceModal userAndBalance={userAndBalance}/>} 
                /> 
            )}
        </>
    )
}