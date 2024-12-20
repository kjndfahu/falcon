import {ReferralLinkBlock} from "@/features/referral/ui/referral-link-block";

interface Props{
    bg?: string;
}

export const ReferralBanner:React.FC<Props> = ({bg}) => {
    return (
        <div className={`flex flex-col gap-[25px] items-center justify-center bg-[#0E1E5A] px-[67px] py-[75px] ${bg} rounded-[15px] bg-cover h-[252px] bg-center `}>
            <div className="flex items-center gap-[25px] text-[24px] leading-[48px] text-[#EFF1FF]">
                Account balance
                <div className="flex font-semibold items-center rounded-[15px] text-[18px] leading-[21px] p-2 bg-[#21316a] text-[#87B0FF]">
                    225$
                </div>
            </div>
            <ReferralLinkBlock/>
        </div>
    )
}