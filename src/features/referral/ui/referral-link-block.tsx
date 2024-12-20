import {CopyLogo} from "@/shared/ui/pc-icons";
import {UserPin} from "@/shared/ui/admin-icons";

export const ReferralLinkBlock = () => {
    return (
        <div className="flex flex-row">
            <div className="flex items-center border-[1px] py-[35px] leading-[18px] px-[60px] text-[18px] text-[#D1DBFF] border-[#41549C] bg-[#0d1b4f] rounded-l-full">
                Your referral link
            </div>
            <div className="flex items-center gap-[10px] border-[1px] py-[35px] leading-[18px] px-[60px] text-[18px] text-[#D1DBFF] border-[#41549C] bg-[#0d1b4f] rounded-r-full">
                <CopyLogo/>
                G32fasf424gfGgewfewgrjhh232fGFEGEWf3
            </div>
        </div>
    )
}