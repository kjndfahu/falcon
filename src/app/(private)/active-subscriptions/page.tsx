import {EndDateSwitcher} from "@/widgets/active-subscriptions/end-date-switcher";
import {ActiveSubsBlock} from "@/features/active-subs/ui/active-subs-block";

export default async function ActiveSubscriptionsPage() {
    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <EndDateSwitcher/>
            <div className="flex gap-[50px] flex-wrap">
                <ActiveSubsBlock/>
                <ActiveSubsBlock/>
            </div>
        </div>
    )
}