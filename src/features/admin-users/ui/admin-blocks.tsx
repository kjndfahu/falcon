'use client'
import {useState} from "react";
import {Modal} from "@/shared/ui/modal";

interface Props{
    title?:string,
    logo?:React.ReactNode,
    styles?: string;
}

export const AdminBlocks:React.FC<Props> = ({title, logo, styles}) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <div className={`flex items-center justify-center gap-[40px] font-semibold w-[413px] ${styles} px-[25px] pt-[28px] pb-[34px] border-[1px] text-black text-[25px] rounded-[15px] border-[#BEDAE9]`}>
            {title}
            {logo}
        </div>
    )
}