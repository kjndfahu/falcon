import {NumOne} from "@/shared/ui/referral-icons";

interface Props {
    number?: React.ReactNode;
}

export const ReferralLevelsBlock:React.FC<Props> = () => {
    return (
        <div className="flex border-[1px] rounded-[15px] border-[rgba(190,_218,_233,_0.1)] w-[720px] h-[372px] items-center justify-center py-[65px] pr-[65px]">
            <NumOne/>
        </div>
    )
}