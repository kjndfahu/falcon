'use client'

import { CopyLogo } from "@/shared/ui/pc-icons";
import {copyCode} from "@/features/referral/model/useCopyCode";
import toast from "react-hot-toast";

interface Props {
    referralCode?: string;
}

export const ReferralLinkBlock: React.FC<Props> = ({ referralCode }) => {
    const handleCopy = () => {
        if (referralCode) {
            copyCode(`http://localhost:3000/sign-up/${referralCode}`);
            toast.success("Referral code copied to clipboard!");
        }
    };

    return (
        <div className="flex sml:w-auto w-full sml:flex-row flex-col">
            <div className="flex justify-center items-center sml:border-[1px] sml:py-[35px] py-[25px] leading-[18px] sml:px-[60px] text-[18px] text-[#D1DBFF] border-[#41549C] border-b-[1px] sml:bg-[#0d1b4f] sml:rounded-l-full">
                Your referral link
            </div>
            <div
                className="flex justify-center items-center gap-[10px] sml:border-[1px] sml:py-[35px] py-[25px] leading-[18px] sml:px-[60px] text-[18px] text-[#D1DBFF] border-[#41549C] sml:bg-[#0d1b4f] rounded-r-full cursor-pointer"
                onClick={handleCopy}
            >
                <CopyLogo />
                {referralCode}
            </div>
        </div>
    );
};
