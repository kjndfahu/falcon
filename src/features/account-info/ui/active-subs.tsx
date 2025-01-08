'use client'

import {BlueBtn} from "@/shared/ui/blue-btn";
import {useState} from "react";
import {ModalSubs} from "@/features/account-info/ui/modal-subs";
import {SessionEntity} from "@/enteties/user/domain";

interface Props{
    className?:string,
    session: SessionEntity;
    subs: number;
    userRole?: string;
}

export const ActiveSubs:React.FC<Props> = ({className, userRole, subs, session}) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className="flex gap-[40px] z-[2] mds:w-[413px] w-full flex-col px-[25px] pt-[28px] pb-[34px] border-[1px] text-black text-[14px] rounded-[15px] border-[#BEDAE9]">
            ACTIVE SUBSCRIPTIONS
            <div className="flex items-center justify-between font-bold text-[42px] leading-[45px] text-[#101D2C]">
                <h3>{subs}</h3>
                <div onClick={() => setIsClicked(true)}>
                    <BlueBtn styles="py-[10px] px-6" title="Purchase"/>
                </div>
            </div>
            {isClicked && ( <ModalSubs userRole={userRole} session={session} isClicked={isClicked} setIsClicked={setIsClicked} /> )}
        </div>
    )
}