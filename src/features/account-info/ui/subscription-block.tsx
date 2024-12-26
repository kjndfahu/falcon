import {subscriptions} from "@/features/subs-price/model/constants";
import {Prosses} from "@/features/subs-price/ui/prosses";

interface Props {
    activeTab: string;
    selectedDays: number;
}

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

export const SubscriptionBlock: React.FC<Props> = ({ activeTab, selectedDays }) => {
    const filteredSubscription = subscriptions.filter(sub => sub.title === activeTab);

    const getPriceForPeriod = (type: string, days: number): string => {
        return `${priceMap[type][days]} $`;
    };

    return (
        <div className="flex w-min gap-[25px]">
            {filteredSubscription.map((item) => (
                <div
                    key={item.title}
                    className="flex flex-col p-[50px] w-[450px] border-[1px] border-[#CAE8FF] h-[585px] rounded-[25px]">
                    <div
                        className="flex flex-col text-center font-medium text-[24px] leading-[30px] text-[#0A131D] gap-[12px]">
                        {item.title}
                        <h4 className="text-[36px] leading-[45px]">
                            {getPriceForPeriod(item.title, selectedDays)}
                        </h4>
                    </div>
                    <Prosses item={item}/>
                </div>
            ))}
        </div>
    );
};