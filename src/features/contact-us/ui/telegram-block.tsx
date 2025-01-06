'use client'
import {CopyIcon, TelegramLogo} from "@/shared/ui/icons";
import {copyToClipboard} from "@/features/contact-us/model/handleCopy";
import toast from "react-hot-toast";

interface Props {
    example: string;
}

export const TelegramBlock:React.FC<Props> = ({example}) => {
    const handleCopy = async () => {
        try {
            await copyToClipboard(example);
            toast.success("Telegram copied to clipboard!");
            console.log("Telegram copied successfully!");
        } catch (error) {
            console.error("Failed to copy telegram:", error);
        }
    };
    return (
        <div className="flex flex-col gap-6 rounded-[15px] bg-[#f4f8fc]">
            <div
                className="flex items-center border-b-[1px] border-[#DDE6EF] py-[18px] px-[16px] font-medium text-[#0A131D] text-[24px] leading-[28px] gap-[10px]">
                <TelegramLogo/>
                Contact Telegram
            </div>
            <div onClick={handleCopy} className="flex justify-between py-[18px] font-normal px-[16px] text-[#67748E] text-[18px] leading-[21px]">
                {example}
                <CopyIcon className="cursor-pointer"/>
            </div>
        </div>
    )
}