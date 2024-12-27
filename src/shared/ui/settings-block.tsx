'use client'
import {useState} from "react";
import {Modal} from "@/shared/ui/modal";
import {SettingsModal} from "@/features/settings/ui/settings-modal";

interface Props {
    title: string,
    info: string;
}

export const SettingsBlock:React.FC<Props> = ({title, info}) => {
    const [isModal, setModal] = useState(false);
    return (
        <div className="flex sml:flex-row flex-col sml:gap-0 gap-4 justify-between px-[40px] border-[1px] bg-[#F6FCFF] border-[#CCE5F8] rounded-[15px] sml:w-[548px] w-full py-[25px]">
            <div className="flex flex-col text-[#4B5167] leading-[25px] text-[18px] gap-3">
                {title}
                <h3 className="text-[24px] font-medium text-[#0A131D]">{info}</h3>
            </div>
            <div onClick={() => setModal(!isModal)} className="flex items-center cursor-pointer sml:h-auto h-[63px] sml:w-auto w-[153px] justify-center bg-[#0057FF] px-[47px] text-[18px] text-white rounded-[15px]">
                Change
            </div>
            {isModal && ( <Modal isModal={isModal} setModal={setModal} title="Change Password" child={ <SettingsModal/> }/> )}
        </div>
    )
}