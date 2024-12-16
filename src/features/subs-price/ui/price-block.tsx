import {Prosses} from "@/features/subs-price/ui/prosses";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {subscriptions} from "@/features/subs-price/model/constants";

export const PriceBlock = () => {
    return (
        <>
            {subscriptions.map((item) => (
                <div
                    key={item.title}
                    className="flex flex-col p-[50px] w-[450px] border-[1px] border-[#CAE8FF] h-[697px] rounded-[25px]">
                    <div
                        className="flex flex-col text-center font-medium text-[24px] leading-[30px] text-[#0A131D] gap-[12px]">{item.title}
                        <h4 className="text-[36px] leading-[45px]">{item.price}</h4>
                    </div>
                    <Prosses item={item} />
                    <BlueBtn title="Start now"/>
                </div>
            ))}
        </>
    )
}