'use client'
import {Prosses} from "@/features/subs-price/ui/prosses";
import {activeSub} from "@/features/account-info/actions/constants";
import { useSession } from "next-auth/react";
import {getDiscountedPrice} from "@/features/account-info/actions/get-discount-price";

interface Props {
    activeTab: string;
    activeDays: string;
    userRole?: string;
}

export const SubscriptionBlock: React.FC<Props> = ({ activeTab, activeDays, userRole }) => {
    const { data: session } = useSession();
    const selectedSub = activeSub.find(sub => sub.title === activeTab);
    
    if (!selectedSub) return null;

    const originalPrice = selectedSub.prices[activeDays as keyof typeof selectedSub.prices];
    const displayPrice = userRole ? getDiscountedPrice(originalPrice, userRole) : originalPrice;

    return (
        <div className="flex w-min gap-[25px]">
            <div className="flex flex-col p-[50px] mdbvp:w-[450px] w-[330px] border-[1px] border-[#CAE8FF] h-[585px] rounded-[25px]">
                <div className="flex flex-col text-center font-medium text-[24px] leading-[30px] text-[#0A131D] gap-[12px]">
                    {selectedSub.title}
                    <h4 className="text-[36px] leading-[45px]">
                        {displayPrice}
                    </h4>
                    {session?.user.role && session.user.role !== 'USER' && (
                        <span className="text-sm text-gray-500">
                            Original price: {originalPrice}
                        </span>
                    )}
                </div>
                <Prosses item={selectedSub}/>
            </div>
        </div>
    );
};