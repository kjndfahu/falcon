'use client'

import {StatisticsDiagram} from "@/features/statistics/ui/statistics-diagram";
import {GraphicSwitcher} from "@/features/statistics/ui/graphic-switcher";
import {useState} from "react";
import {ResellerSellsDiagram} from "@/features/statistics/ui/resellers-sels-diagram";

interface Props{
    sells: {price: number,
        createdAt: Date
    }[],
    resellerSells: {
        price: number,
        userId: number | null,
        createdAt: Date
    }[],
}

export const StatisticsInfo:React.FC<Props> = ({sells, resellerSells}) => {
    const [graphic, setGraphic] = useState('Sells');
    return (
        <div className="flex flex-col text-[25px] text-black font-semibold w-full gap-[50px] flec-col">
            <div className="flex items-center gap-[50px]">
                <h3>Статистика</h3>
                <GraphicSwitcher graphic={graphic} setGraphic={setGraphic}/>
            </div>
            {graphic === 'Sells' && (
                <StatisticsDiagram sells={sells}/>
            )}
            {graphic === 'Resellers' && (
                <ResellerSellsDiagram resellerSells={resellerSells}/>
            )}
        </div>
    )
}