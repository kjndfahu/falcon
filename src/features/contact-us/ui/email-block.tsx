'use client'
import {CopyIcon, MailLogo} from "@/shared/ui/icons";
import {copyToClipboard} from "@/features/contact-us/model/handleCopy";
import toast from "react-hot-toast";

interface Props {
    example: string;
}

export const EmailBlock: React.FC<Props> = ({ example }) => {
    const handleCopy = async () => {
        try {
            await copyToClipboard(example);
            toast.success("Email copied to clipboard!");
            console.log("Email copied successfully!");
        } catch (error) {
            console.error("Failed to copy email:", error);
        }
    };

    return (
        <div className="flex flex-col gap-6 rounded-[15px] bg-[#f4f8fc]">
            <div
                className="flex items-center border-b-[1px] border-[#DDE6EF] py-[18px] px-[16px] font-medium text-[#0A131D] text-[24px] leading-[28px] gap-[10px]"
            >
                <MailLogo />
                Contact Email
            </div>
            <div onClick={handleCopy} className="flex justify-between py-[18px] font-normal px-[16px] text-[#67748E] text-[18px] leading-[21px]">
                {example}
                <CopyIcon className="cursor-pointer" />
            </div>
        </div>
    );
};