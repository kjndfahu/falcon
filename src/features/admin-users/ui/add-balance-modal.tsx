'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {BalanceType} from "@/features/admin-users/ui/balance-type";
import {useState} from "react";
import {AddBalanceForm} from "@/features/admin-users/ui/add-balance-form";
import {BlueBtn} from "@/shared/ui/blue-btn";

interface Props{
    isClicked:boolean;
    setIsClicked:(isClicked:boolean) => void;
}

export const AddBalanceModal:React.FC<Props> = ({isClicked, setIsClicked}) => {
    const [activeType, setActiveType] = useState('Пополнить');

    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex flex-col w-[800px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]">
                <div className="flex items-center w-full text-black justify-between">
                    Пополнить / Снять деньги
                    <div className="cursor-pointer" onClick={() => setIsClicked(!isClicked)}>
                        <XLogo/>
                    </div>
                </div>
                <BalanceType activeType={activeType} setActiveType={setActiveType}/>
                {activeType === 'Пополнение' ? ( <AddBalanceForm/> ) : ( <AddBalanceForm/>)}
                <BlueBtn styles="w-full" title="Submit"/>
            </div>
        </div>
    )
}