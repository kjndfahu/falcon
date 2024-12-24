'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {SubsTabs} from "@/features/account-info/ui/subs-tabs";
import {SubscriptionBlock} from "@/features/account-info/ui/subscription-block";
import {DaysBlock} from "@/features/account-info/ui/days-block";
import {useEffect, useState} from "react";
import {ReferralDiagram} from "@/features/referral/ui/referral-diagram";
import {BlueBtn} from "@/shared/ui/blue-btn";

interface Props{
    className?:string,
    isClicked: boolean,
    setIsClicked: (isClicked:boolean) => void,
}

export const ModalSubs:React.FC<Props> = ({isClicked, setIsClicked}) => {
    const [activeTab, setActiveTab] = useState('Basic');
    const [selectedDays, setSelectedDays] = useState(30);

    useEffect(() => {
        if (isClicked) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isClicked]);

    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <div
                className="flex flex-col w-[1218px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]">
                <SubsTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="flex w-full gap-[25px]">
                    <SubscriptionBlock activeTab={activeTab} selectedDays={selectedDays}/>
                    <div className="flex w-full justify-between flex-col">
                        <div className="flex text-[36px] text-black items-center justify-between ">
                            Subscription pricing
                            <div className="cursor-pointer" onClick={() => setIsClicked(!isClicked)}>
                                <XLogo/>
                            </div>
                        </div>
                        <DaysBlock selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
                        <ReferralDiagram/>
                        <BlueBtn title="Buy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}