'use client'
import {DaysBlock} from "@/features/subs-price/ui/days-block";
import {PriceBlock} from "@/features/subs-price/ui/price-block";
import {useState} from "react";

export const SubsPrice = () => {
    const [activeDays, setActiveDays] = useState('30');
    return (
        <div className="flex w-full items-center gap-[70px] flex-col">
            <div className="flex sml:w-auto w-full sml:px-0 sm:px-[50px] px-[20px] items-center flex-col gap-[50px] font-medium text-[#232429] text-[36px] leading-[45px]">
                Subscription Pricing
                <DaysBlock activeDays={activeDays} setActiveDays={setActiveDays} />
            </div>
            <div className="flex items-center justify-center flex-wrap sm:px-0 px-[20px] xl:gap-[65px] gap-[25px]">
                <PriceBlock activeDays={activeDays} />
            </div>
        </div>
    )
}