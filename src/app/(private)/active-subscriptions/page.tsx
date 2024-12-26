import {EndDateSwitcher} from "@/widgets/active-subscriptions/end-date-switcher";
import {ActiveSubsBlock} from "@/features/active-subs/ui/active-subs-block";
import {sessionService} from "@/enteties/user/services/session";
import {getActiveSubs} from "@/enteties/subscription/services/get-active-subs";

export default async function ActiveSubscriptionsPage() {
    const {session} = await sessionService.verifySession()
    const activeSubs = await getActiveSubs({userId: session.id})
    console.log(activeSubs)

    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <EndDateSwitcher/>
            <div className="flex gap-[50px] flex-wrap">
                {activeSubs.map((item, index) => (
                    <ActiveSubsBlock price={item.price} autorenew={item.autorenew} endDate={item.endDate} trackingNumber={item.trackingNumber} type={item.type}/>
                ))}
                {/*<ActiveSubsBlock/>*/}
                {/*<ActiveSubsBlock/>*/}
            </div>
        </div>
    )
}