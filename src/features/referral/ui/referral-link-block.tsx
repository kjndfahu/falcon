'use client'

import { CopyLogo } from "@/shared/ui/pc-icons";
import toast from "react-hot-toast";

interface Props {
    referralCode?: string;
}

export const ReferralLinkBlock: React.FC<Props> = ({ referralCode }) => {
    const handleCopy = async () => {
        if (!referralCode) return;
        
        const text = `http://falcon-tracker.io/sign-up/${referralCode}`;
        
        try {
            // Try using the Clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                toast.success("Referral code copied to clipboard!");
                return;
            }
            
            // Fallback for non-secure contexts or when Clipboard API is not available
            const textArea = document.createElement("textarea");
            textArea.value = text;
            
            // Avoid scrolling to bottom
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                toast.success("Referral code copied to clipboard!");
            } catch (err) {
                console.error('Failed to copy: ', err);
                toast.error("Failed to copy referral code");
            } finally {
                document.body.removeChild(textArea);
            }
        } catch (err) {
            console.error('Failed to copy: ', err);
            toast.error("Failed to copy referral code");
        }
    };

    return (
        <div className="flex sml:w-auto w-full sml:flex-row flex-col">
            <div className="flex justify-center items-center sml:border-[1px] sml:py-[35px] py-[25px] leading-[18px] sml:px-[60px] text-[18px] text-[#D1DBFF] border-[#41549C] border-b-[1px] sml:bg-[#0d1b4f] sml:rounded-l-full">
                Your referral link
            </div>
            <div
                className="flex text-center justify-center items-center gap-[10px] sml:border-[1px] sml:py-[35px] py-[25px] leading-[18px] sml:px-[60px] text-[18px] text-[#D1DBFF] border-[#41549C] sml:bg-[#0d1b4f] rounded-r-full cursor-pointer"
                onClick={handleCopy}
            >
                <CopyLogo />
                http://falcon-tracker.io/sign-up/{referralCode}
            </div>
        </div>
    );
};
