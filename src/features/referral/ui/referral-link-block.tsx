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
        <div className="flex flex-row">
            <div className="flex items-center border-[1px] py-[35px] leading-[18px] px-[60px] text-[18px] text-[#D1DBFF] border-[#41549C] bg-[#0d1b4f] rounded-l-full">
                Your referral link
            </div>
            <div
                className="flex items-center gap-[10px] border-[1px] py-[35px] leading-[18px] px-[60px] text-[18px] text-[#D1DBFF] border-[#41549C] bg-[#0d1b4f] rounded-r-full cursor-pointer"
                onClick={handleCopy}
            >
                <CopyLogo />
                {referralCode}
            </div>
        </div>
    );
};
