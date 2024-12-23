'use client'
import {BlueBtn} from "@/shared/ui/blue-btn";
import {useState} from "react";
import {ModalSubs} from "@/features/account-info/ui/modal-subs";

interface Props{
    className?:string,
}

export const ActiveSubs:React.FC<Props> = ({className}) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className="flex gap-[40px] w-[413px] flex-col px-[25px] pt-[28px] pb-[34px] border-[1px] text-black text-[14px] rounded-[15px] border-[#BEDAE9]">
            ACTIVE SUBSCRIPTIONS
            <div className="flex items-center justify-between font-bold text-[42px] leading-[45px] text-[#101D2C]">
                <h3>2</h3>
                <div onClick={() => setIsClicked(true)}>
                    <BlueBtn styles="py-[10px] px-6" title="Purchase"/>
                </div>
            </div>
            {isClicked && ( <ModalSubs isClicked={isClicked} setIsClicked={setIsClicked} /> )}
        </div>
    )
}