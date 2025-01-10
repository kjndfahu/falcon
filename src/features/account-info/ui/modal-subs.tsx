'use client'

import {XLogo} from "@/shared/ui/pc-icons";
import {SubsTabs} from "@/features/account-info/ui/subs-tabs";
import {SubscriptionBlock} from "@/features/account-info/ui/subscription-block";
import {DaysBlock} from "@/features/account-info/ui/days-block";
import {useEffect, useState, useTransition} from "react";
import {ReferralDiagram} from "@/features/referral/ui/referral-diagram";
import {BlueBtn} from "@/shared/ui/blue-btn";
import { SessionEntity } from "@/enteties/user/domain";
import { buySubscriptionAction } from "../actions/buy-subscription";
import { activeSub } from "../actions/constants";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
    className?: string,
    isClicked: boolean,
    setIsClicked: (isClicked: boolean) => void,
    session: SessionEntity;
    userRole?: string;
    sells: {price: number,
        createdAt: Date
    }[],
}

export const ModalSubs: React.FC<Props> = ({isClicked, sells, setIsClicked, userRole, session}) => {
    const [activeTab, setActiveTab] = useState('Basic');
    const [activeDays, setActiveDays] = useState('30');
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleBuyClick = () => {
        const selectedSub = activeSub.find(sub => sub.title === activeTab);
        if (!selectedSub) return;

        const price = parseInt(selectedSub.prices[activeDays as keyof typeof selectedSub.prices]);
        const trackingNumber = Math.floor(Math.random() * 1000000);
        
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + parseInt(activeDays));

        const formData = new FormData();
        formData.append('type', activeTab.toUpperCase());
        formData.append('price', price.toString());
        formData.append('trackingNumber', trackingNumber.toString());
        formData.append('autorenew', 'false');
        formData.append('userId', session.id.toString());
        formData.append('endDate', endDate.toISOString());

        startTransition(async () => {
            try {
                console.log('Sending subscription data:', Object.fromEntries(formData));
                const result = await buySubscriptionAction({}, formData);
                console.log('Subscription result:', result);
                
                if (!result?.errors) {
                    toast.success("Subscription successfully purchased!");
                    setIsClicked(false);
                    router.refresh();
                } else {
                    toast.error("Failed to buy subscription");
                    setError(result.errors._errors || 'Failed to buy subscription');
                }
            } catch (error) {
                console.error('Error buying subscription:', error);
                setError('Failed to process subscription');
            }
        });
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
            <div
                className="flex flex-col mds:max-h-[100%] max-h-[850px] mdbvp:w-[1218px] md:w-[1000px] w-full md:mx-0 mx-[50px] items-center md:gap-[50px] gap-[25px] mdbvp:p-[50px] sm:p-[25px] p-[10px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]">
                <div className="md:hidden w-full justify-end flex cursor-pointer" onClick={() => setIsClicked(false)}>
                    <XLogo/>
                </div>
                <SubsTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="flex h-full items-center mds:overflow-y-hidden overflow-y-auto mds:scroll-y-auto custom-scroll md:flex-row flex-col-reverse w-full gap-[25px]">
                    <div className="md:hidden flex">
                        <BlueBtn
                            title={isPending ? "Processing..." : "Buy"}
                            onClick={handleBuyClick}
                            type="button"
                            styles="w-[50vw]"
                        />
                    </div>
                    <div className="md:hidden flex">
                        <ReferralDiagram sells={sells}/>
                        {error && (
                            <div className="text-red-500">{error}</div>
                        )}
                    </div>
                    <SubscriptionBlock userRole={userRole} activeTab={activeTab} activeDays={activeDays}/>
                    <div className="flex md:h-[585px] w-full justify-between flex-col">
                        <div className="flex sm:text-[36px] text-[24px] text-black items-center justify-between ">
                            Subscription pricing
                            <div className="md:flex hidden cursor-pointer" onClick={() => setIsClicked(false)}>
                                <XLogo/>
                            </div>
                        </div>
                        <DaysBlock activeDays={activeDays} setActiveDays={setActiveDays}/>
                        <div className="md:flex hidden">
                            <ReferralDiagram sells={sells}/>
                            {error && (
                                <div className="text-red-500">{error}</div>
                            )}
                        </div>
                        <div className="md:flex hidden">
                            <BlueBtn
                                title={isPending ? "Processing..." : "Buy"}
                                onClick={handleBuyClick}
                                type="button"
                                styles="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}