import {StatisticsDiagram} from "@/features/statistics/ui/statistics-diagram";

interface Props{
    className?:string,
}

export const StatisticsInfo:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-col text-[25px] text-black font-semibold w-full gap-[50px] flec-col">
            <h3>Статистика</h3>
            <StatisticsDiagram/>
        </div>
    )
}