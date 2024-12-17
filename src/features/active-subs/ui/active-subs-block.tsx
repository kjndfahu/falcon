import {BlueBtn} from "@/shared/ui/blue-btn";
import {AutoRenewBtn} from "@/features/active-subs/ui/auto-renew-btn";

export const ActiveSubsBlock = () => {
    return (
        <div className="flex gap-[50px] rounded-[15px] p-[50px] w-[548px] border-[1px] border-[#CCE5F8] bg-[F6FCFF]">
            <div className="flex gap-[50px]">
                <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col gap-[25px]">
                        <div className="flex flex-col gap-1 text-[18px] text-[#4B5167]">
                            Subscription type
                            <h3 className="text-[24px] font-medium text-[#0A131D]">Premium</h3>
                        </div>
                        <div className="flex flex-col gap-1 text-[18px] text-[#4B5167]">
                            Tracking number
                            <h3 className="text-[24px] font-medium text-[#0A131D]">324</h3>
                        </div>
                    </div>
                    <BlueBtn styles="w-[199px] py-[20px]" title="Renew subscription"/>
                </div>

                <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col gap-[25px]">
                        <div className="flex flex-col gap-1 text-[18px] text-[#4B5167]">
                            Price type
                            <h3 className="text-[24px] font-medium text-[#0057FF]">50$</h3>
                        </div>
                        <div className="flex flex-col gap-1 text-[18px] text-[#4B5167]">
                            Active until
                            <h3 className="text-[24px] font-medium text-[#0A131D]">01.01.2024</h3>
                        </div>
                    </div>
                    <AutoRenewBtn/>
                </div>
            </div>
        </div>
    )
}