import {PrBlock} from "@/shared/ui/pr-block";
import {CustomersCount} from "@/features/premium-block/ui/customers-count";
import {EarningSales} from "@/features/premium-block/ui/earning-sales";
import {NextLvLBlock} from "@/features/account-info/ui/next-lvl-block";

interface Props{
    progress?: number;
    getCustomers: number;
    totalPriceSales: number;
    totalEarns: number;
}

export const PremiumBlock:React.FC<Props> = ({progress, totalPriceSales, totalEarns, getCustomers}) => {
    return (
        <div className="flex flex-wrap items-center gap-[50px]">
            <NextLvLBlock percentage={progress}/>
            <PrBlock child={ <CustomersCount getCustomers={getCustomers} /> } />
            <PrBlock child={ <EarningSales totalEarns={totalEarns} totalPriceSales={totalPriceSales}/> } />
        </div>
    )
}