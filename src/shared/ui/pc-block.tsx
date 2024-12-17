'use client'
import {useState} from "react";
import {Modal} from "@/shared/ui/modal";

interface Props{
    className?:string,
    title?:string,
    num?:string,
    btn?:React.ReactNode,
}

export const PcBlock:React.FC<Props> = ({title, num, btn}) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <div className="flex gap-[40px] w-[413px] flex-col px-[25px] pt-[28px] pb-[34px] border-[1px] text-black text-[14px] rounded-[15px] border-[#BEDAE9]">
            {title}
            <div onClick={() => setIsClicked(true)} className="flex items-center justify-between font-bold text-[42px] leading-[45px] text-[#101D2C]">
                <h3>{num}</h3>
                {btn}
            </div>
            {isClicked && (
                <Modal/>
            ) }
        </div>
    )
}