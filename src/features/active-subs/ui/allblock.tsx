'use client'
import {EndDateSwitcher} from "@/widgets/active-subscriptions/end-date-switcher";
import {ActiveSubsBlock} from "@/features/active-subs/ui/active-subs-block";
import {formatDate} from "@/shared/lib/formats";
import {SubscriptionType} from "@prisma/client";
import {useState} from "react";

interface Props{
    className?: string;
    subs: {
        id: number;
        type: SubscriptionType;
        trackingNumber: number;
        price: number;
        autorenew: boolean;
        endDate: Date;
        userId: number | null;
        createdAt: Date;
        updatedAt: Date; }[];
    activeSubs: {
        type: SubscriptionType;
        trackingNumber: number;
        price: number;
        autorenew: boolean;
        endDate: Date;
        id: number;
        userId: number | null;
        createdAt: Date;
        updatedAt: Date; }[]
}

export const AllBlock:React.FC<Props>  =({subs, activeSubs}) => {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="flex w-full flex-col gap-[50px] md:py-[77px] py-[30px] md:px-[129px] sml:px-[50px] px-[20px]">
            <EndDateSwitcher isActive={isActive} setIsActive={setIsActive}/>
            <div className="flex gap-[50px] flex-wrap">
                {isActive ? (
                    <>
                        {subs.map((item) => (
                            <div className="sml:w-auto w-full" key={item.id}>
                                <ActiveSubsBlock type={item.type} trackingNumber={item.trackingNumber} price={item.price}
                                                 autorenew={item.autorenew} endDate={formatDate(item.endDate)}/>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {activeSubs.map((item) => (
                            <div className="sml:w-auto w-full" key={item.id}>
                                <ActiveSubsBlock type={item.type} trackingNumber={item.trackingNumber} price={item.price}
                                                 autorenew={item.autorenew} endDate={formatDate(item.endDate)}/>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}