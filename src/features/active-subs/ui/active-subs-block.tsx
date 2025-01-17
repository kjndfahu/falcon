'use client'
import {BlueBtn} from "@/shared/ui/blue-btn";
import {AutoRenewBtn} from "@/features/active-subs/ui/auto-renew-btn";
import {SubscriptionType} from "@/enteties/subscription/domain";
import {formatType} from "@/shared/lib/formats";
import {renewSubscription} from "@/features/active-subs/actions/renew-subscription";
import toast from "react-hot-toast";

interface Props{
    type: SubscriptionType;
    trackingNumber: number;
    price: number;
    endDate: string;
    autorenew: boolean;
}

export const ActiveSubsBlock: React.FC<Props> = ({ type, autorenew, trackingNumber, price, endDate }) => {

    const handleRenewSubscription = async () => {
        const result = await renewSubscription(trackingNumber, autorenew, price);

        if (result.success) {
            toast.success("Subscription renewed successfully!");
        } else {
            toast.error(result.error || "An error occurred during renewal.");
        }
    };

    return (
        <div className="flex gap-[50px] rounded-[15px] sml:p-[50px] p-[40px] sml:w-[548px] w-full border-[1px] border-[#CCE5F8] bg-[F6FCFF]">
            <div className="flex sml:flex-row flex-col sml:gap-[50px] gap-[30px]">
                <div className="flex flex-col sml:gap-[50px] gap-[25px]">
                    <div className="flex flex-col gap-[25px]">
                        <div className="flex flex-col gap-1 text-[18px] text-[#4B5167]">
                            Subscription type
                            <h3 className="text-[24px] font-medium text-[#0A131D]">{formatType(type)}</h3>
                        </div>
                        <div className="flex flex-col gap-1 text-[18px] text-[#4B5167]">
                            Tracking number
                            <h3 className="text-[24px] font-medium text-[#0A131D]">{trackingNumber}</h3>
                        </div>
                    </div>
                    <BlueBtn styles="sml:flex hidden w-[197px] py-[20px]" title="Renew subscription" onClick={handleRenewSubscription} />
                </div>

                <div className="flex flex-col sml:gap-[50px] gap-[25px]">
                    <div className="flex flex-col gap-[25px]">
                        <div className="flex flex-col gap-1 text-[18px] text-[#4B5167]">
                            Price type
                            <h3 className="text-[24px] font-medium text-[#0057FF]">{price}$</h3>
                        </div>
                        <div className="flex flex-col gap-1 text-[18px] text-[#4B5167]">
                            Active until
                            <h3 className="text-[24px] font-medium text-[#0A131D]">{endDate}</h3>
                        </div>
                    </div>
                    <BlueBtn styles="sml:hidden flex w-[197px] py-[20px]" title="Renew subscription" onClick={handleRenewSubscription} />
                    <AutoRenewBtn autorenew={autorenew} trackingNumber={trackingNumber} />
                </div>
            </div>
        </div>
    );
};