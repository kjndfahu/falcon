import {DaysBlock} from "@/features/subs-price/ui/days-block";
import {PriceBlock} from "@/features/subs-price/ui/price-block";

export const SubsPrice = () => {
    return (
        <div className="flex items-center gap-[70px] flex-col">
            <div className="flex items-center flex-col gap-[50px] font-medium text-[#232429] text-[36px] leading-[45px]">
                Subscription Pricing
                <DaysBlock/>
            </div>
            <div className="flex gap-[65px]">
                <PriceBlock/>
            </div>
        </div>
    )
}