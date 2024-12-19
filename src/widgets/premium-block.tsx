import {PrBlock} from "@/shared/ui/pr-block";
import {LevelBlock} from "@/features/premium-block/ui/level-block";
import {CustomersCount} from "@/features/premium-block/ui/customers-count";
import {EarningSales} from "@/features/premium-block/ui/earning-sales";

export const PremiumBlock = () => {
    return (
        <div className="flex items-center gap-[50px]">
            <PrBlock child={ <LevelBlock/> } />
            <PrBlock child={ <CustomersCount/> } />
            <PrBlock child={ <EarningSales/> } />
        </div>
    )
}