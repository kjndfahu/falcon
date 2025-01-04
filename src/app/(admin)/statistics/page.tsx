import {StatisticsInfo} from "@/features/statistics/ui/statistics-info";
import {getTotalSells} from "@/enteties/user/repositories/user";

export default async function StatisticsPage() {
    const sells = await getTotalSells();
    console.log(sells)
    return (
        <div className="flex w-full flex-col gap-[50px] lg:px-[62px] sm:px-[30px] px-[10px] pt-[77px]">
            <StatisticsInfo sells={sells}/>
        </div>
    )
}