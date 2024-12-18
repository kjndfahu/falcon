import {ReferralLevelsBlock} from "@/features/referral-programm/ui/referral-levels-block";

interface Props {
    className?: string;
}

export const PartneshipLevels:React.FC<Props> = ({className}) => {
    return (
        <div className="flex justify-center font-semibold text-[36px] leading-[40px]  h-[1309px] pt-[50px] bg-cover bg-bg-referral bg-center">
            Partnesrhip Levels
            <ReferralLevelsBlock/>
        </div>
    )
}