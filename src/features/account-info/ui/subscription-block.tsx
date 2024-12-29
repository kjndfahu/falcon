import {Prosses} from "@/features/subs-price/ui/prosses";
import {activeSub} from "@/features/account-info/actions/constants";

interface Props {
    activeTab: string;
    activeDays: string;
}

export const SubscriptionBlock: React.FC<Props> = ({ activeTab, activeDays }) => {
    const selectedSub = activeSub.find(sub => sub.title === activeTab);
    
    if (!selectedSub) return null;

    return (
        <div className="flex w-min gap-[25px]">
            <div className="flex flex-col p-[50px] w-[450px] border-[1px] border-[#CAE8FF] h-[585px] rounded-[25px]">
                <div className="flex flex-col text-center font-medium text-[24px] leading-[30px] text-[#0A131D] gap-[12px]">
                    {selectedSub.title}
                    <h4 className="text-[36px] leading-[45px]">
                        {selectedSub.prices[activeDays as keyof typeof selectedSub.prices]}
                    </h4>
                </div>
                <Prosses item={selectedSub}/>
            </div>
        </div>
    )
}