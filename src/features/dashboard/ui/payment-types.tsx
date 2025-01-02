'use client'

import {useState} from "react";
import {Modal} from "@/shared/ui/modal";
import {PaymentsModal} from "@/features/dashboard/ui/payments-modal";

interface Props{
    className?:string;

}

export const PaymentTypes:React.FC<Props> = ({ className}) => {
    const [isActive, setActive] = useState(false);
    return (
        <div onClick={() => setActive(true)} className="flex flex-col text-[18px] font-semibold text-black gap-[40px]">
            Предпочитаемые типы оплаты
            {isActive && ( <Modal styles="w-[80%]" title="Inactive" setModal={setActive} isModal={isActive} child={ <PaymentsModal /> } /> )}
        </div>
    )
}