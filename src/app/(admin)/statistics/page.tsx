import {StatisticsInfo} from "@/features/statistics/ui/statistics-info";
import {getTotalSells} from "@/enteties/user/repositories/user";
import {getTotalResellerSell} from "@/features/statistics/actions/get-total-reseller-sells";

export default async function StatisticsPage() {
    const sells = await getTotalSells();
    const resellerSells = await getTotalResellerSell()
    console.log(resellerSells)
    return (
        <div className="flex w-full flex-col gap-[50px] lg:px-[62px] sm:px-[30px] px-[10px] pt-[77px]">
            <StatisticsInfo resellerSells={resellerSells} sells={sells}/>
        </div>
    )
}