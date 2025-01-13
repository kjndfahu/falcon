'use client';

import {subscriptions} from "@/features/subs-price/model/constants";
import {SubsProsses} from "@/features/account-info/ui/subs-prosses";

interface Props {
    activeDays: '30' | '90' | '180';
}

export const AllSubscriptions: React.FC<Props> = ({activeDays}) => {
    return (
        <div className="md:flex hidden justify-between">
            {subscriptions.map((item) => (
                <div
                    key={item.title}
                    className="flex flex-col pt-[15px] px-[20px] md:w-[200px] md:gap-0 gap-3 w-full border-[1px] border-[#CAE8FF] h-full rounded-[25px]"
                >
                    <div
                        className="flex flex-col text-center font-medium text-[20px] leading-[22px] text-[#0A131D] gap-[5px]">
                        {item.title}
                        <h4 className="text-[20px] leading-[25px]">
                            {item.prices[activeDays]}
                        </h4>
                    </div>
                    <SubsProsses item={item}/>
                </div>
            ))}
        </div>
    );
};