import {StatisticsInfo} from "@/features/statistics/ui/statistics-info";
import {getTotalSells} from "@/enteties/user/repositories/user";
import {getTotalResellerSell} from "@/features/statistics/actions/get-total-reseller-sells";
import {getTotalReferralAmount} from "@/features/statistics/actions/get-total-referrals-amount";

export default async function StatisticsPage() {
    const sells = await getTotalSells();
    const resellerSells = await getTotalResellerSell()
    const referralBuys = await getTotalReferralAmount()
    return (
        <div className="flex w-full flex-col gap-[50px] lg:px-[62px] sm:px-[30px] px-[10px] pt-[77px]">
            <StatisticsInfo referralBuys={referralBuys} resellerSells={resellerSells} sells={sells}/>
        </div>
    )
}