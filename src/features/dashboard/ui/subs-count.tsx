'use client'
import {useState} from "react";
import {Modal} from "@/shared/ui/modal";
import {SubsModal} from "@/features/dashboard/ui/subs-modal";

interface Props{
    className?:string;
    activeSubs: number;
    subscriptionCounts:  Record<string, number>;
}

export const SubsCount:React.FC<Props> = ({activeSubs, subscriptionCounts, className}) => {
    const [isActive, setActive] = useState(false);
    return (
        <div onClick={() => setActive(true)} className="flex flex-col text-[18px] font-semibold text-black gap-[40px]">
            Всего активных подписок
            <h3 className="text-[42px] font-semibold text-[#101D2C]">{activeSubs}</h3>
            {isActive && ( <Modal styles="w-[80%]" title="Активных подписок" setModal={setActive} isModal={isActive} child={ <SubsModal subscriptionCounts={subscriptionCounts}/> } /> )}
        </div>
    )
}