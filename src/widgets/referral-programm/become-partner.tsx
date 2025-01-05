import {BecomePartnerBlocks} from "@/widgets/referral-programm/become-partner-blocks";

interface Props{
    className?:string;
}

export const BecomePartner:React.FC<Props> = ({}) => {
    return (
        <div
            className="flex flex-col xl:gap-[50px] gap-[30px] sml:px-0 px-[20px] items-center justify-center text-[36px] text-black font-semibold leading-[40px]">
            <div className="flex flex-col text-center gap-3">
                Become a partner
                <p className="text-[18px] font-normal text-[#4B5167]">Becoming a partner is easy. Follow these steps to
                    get started:</p>
            </div>
            <BecomePartnerBlocks/>
        </div>
    )
}