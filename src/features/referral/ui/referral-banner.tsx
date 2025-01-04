import {ReferralLinkBlock} from "@/features/referral/ui/referral-link-block";

interface Props{
    bg?: string;
    balance?: number;
    referralCode?: string;
}

export const ReferralBanner:React.FC<Props> = ({bg, balance, referralCode}) => {
    return (
        <div className={`flex flex-col sml:gap-[25px] items-center justify-center bg-referral-banner sml:px-[67px] px-[20px] py-[75px] ${bg} rounded-[15px] bg-cover h-[252px] bg-center `}>
            <div className="flex items-center gap-[25px] sml:text-[24px] text-[18px] leading-[48px] text-[#EFF1FF]">
                Account balance
                <div className="flex font-semibold items-center rounded-[15px] text-[18px] leading-[21px] p-2 bg-[#21316a] text-[#87B0FF]">
                    {balance?.toFixed(2)}$
                </div>
            </div>
            <ReferralLinkBlock referralCode={referralCode}/>
        </div>
    )
}