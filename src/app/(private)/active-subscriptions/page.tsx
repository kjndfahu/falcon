import {getSubs} from "@/enteties/subscription/services/get-subscriptions";
import {sessionService} from "@/enteties/user/services/session";
import {getActiveSubs} from "@/enteties/subscription/services/get-active-subscriptions";
import {AllBlock} from "@/features/active-subs/ui/allblock";

export default async function ActiveSubscriptionsPage() {
    const {session} = await sessionService.verifySession()
    const now = new Date();
    const subs = await getSubs({userId: session.id})
    const activeSubs = await getActiveSubs({userId: session.id, currentDate: now})

    return (
        <AllBlock subs={subs} activeSubs={activeSubs}/>
    )
}