'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {SubsTabs} from "@/features/account-info/ui/subs-tabs";
import {SubscriptionBlock} from "@/features/account-info/ui/subscription-block";
import {DaysBlock} from "@/features/account-info/ui/days-block";
import {useEffect, useState} from "react";
import {ReferralDiagram} from "@/features/referral/ui/referral-diagram";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {createSubscriptionAction} from "@/features/account-info/actions/create-subscription";
import { $Enums } from "@prisma/client";
import {SessionEntity} from "@/enteties/user/domain";
import {useBalanceStore} from "@/shared/store/balance";

interface Props {
    className?: string;
    isClicked: boolean;
    session: SessionEntity;
    setIsClicked: (isClicked: boolean) => void;
}

export const ModalSubs: React.FC<Props> = ({isClicked, session, setIsClicked}) => {
    const [activeTab, setActiveTab] = useState('Basic');
    const [selectedDays, setSelectedDays] = useState(30);
    const userId = session.id;
    const updateBalance = useBalanceStore((state) => state.updateBalance);

    const priceMap = {
        'Basic': {
            30: 50,
            90: 155,
            180: 240
        },
        'Fast': {
            30: 60,
            90: 160,
            180: 285
        },
        'Turbo': {
            30: 110,
            90: 295,
            180: 540
        }
    } as const;

    const handleSubscribe = async () => {
        if (!userId) {
            console.error("User not authenticated");
            return;
        }

        try {
            const subscriptionType = activeTab.toUpperCase() as $Enums.SubscriptionType;
            const price = priceMap[activeTab][selectedDays];

            const result = await createSubscriptionAction(
                subscriptionType,
                price,
                selectedDays,
                userId
            );

            if (result.success && result.data?.subscription) {
                updateBalance(-price);
                setIsClicked(false);
            } else {
                console.error("Subscription error:", result.error);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Subscription error:", error.message);
            } else {
                console.error("Unexpected error during subscription");
            }
        }
    };

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
            <div className="flex flex-col w-[1218px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]">
                <SubsTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="flex w-full gap-[25px]">
                    <SubscriptionBlock activeTab={activeTab} selectedDays={selectedDays}/>
                    <div className="flex w-full justify-between flex-col">
                        <div className="flex text-[36px] text-black items-center justify-between">
                            Subscription pricing
                            <div className="cursor-pointer" onClick={() => setIsClicked(!isClicked)}>
                                <XLogo/>
                            </div>
                        </div>
                        <DaysBlock selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
                        <ReferralDiagram/>
                        <BlueBtn 
                            title="Buy" 
                            onClick={handleSubscribe}
                            styles={!userId ? "opacity-50 cursor-not-allowed" : ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};