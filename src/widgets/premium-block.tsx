import {PrBlock} from "@/shared/ui/pr-block";
import {CustomersCount} from "@/features/premium-block/ui/customers-count";
import {EarningSales} from "@/features/premium-block/ui/earning-sales";
import {NextLvLBlock} from "@/features/account-info/ui/next-lvl-block";

interface Props{
    progress?: number;
    getReferrals?: number;
}

export const PremiumBlock:React.FC<Props> = ({progress, getReferrals}) => {
    return (
        <div className="flex items-center gap-[50px]">
            <NextLvLBlock percentage={progress}/>
            <PrBlock child={ <CustomersCount /> } />
            <PrBlock child={ <EarningSales/> } />
        </div>
    )
}