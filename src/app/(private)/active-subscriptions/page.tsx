import {EndDateSwitcher} from "@/widgets/active-subscriptions/end-date-switcher";
import {ActiveSubsBlock} from "@/features/active-subs/ui/active-subs-block";
import {getSubs} from "@/enteties/subscription/services/get-subscriptions";
import {sessionService} from "@/enteties/user/services/session";
import {formatDate} from "@/shared/lib/formats";

export default async function ActiveSubscriptionsPage() {
    const {session} = await sessionService.verifySession()
    const subs = await getSubs({userId: session.id})


    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <EndDateSwitcher/>
            <div className="flex gap-[50px] flex-wrap">
                {subs.map((item) => (
                    <div key={item.id}>
                        <ActiveSubsBlock type={item.type} trackingNumber={item.trackingNumber} price={item.price} autorenew={item.autorenew} endDate={formatDate(item.endDate)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}