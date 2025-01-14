'use client'
import {CopyIcon, MailLogo} from "@/shared/ui/icons";
import toast from "react-hot-toast";

interface Props {
    example: string;
}

export const EmailBlock: React.FC<Props> = ({ example }) => {
    const handleCopy = async () => {
        try {
            if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
                await navigator.clipboard.writeText(example);
                toast.success("Email copied to clipboard!");
                console.log("Email copied successfully!");
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = example;
                document.body.appendChild(textArea);
                textArea.select();
                textArea.setSelectionRange(0, 99999);

                if (document.execCommand("copy")) {
                    toast.success("Email copied to clipboard!");
                    console.log("Email copied successfully!");
                } else {
                    throw new Error("Fallback copy method failed.");
                }

                document.body.removeChild(textArea);
            }
        } catch (error) {
            toast.error("Failed to copy email.");
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