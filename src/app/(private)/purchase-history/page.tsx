import {TariffTable} from "@/widgets/purchase-history/purchase-table";
import {sessionService} from "@/enteties/user/services/session";
import {getSubs} from "@/enteties/subscription/services/get-subscriptions";

export default async function PurchaseHistory() {
    const {session} = await sessionService.verifySession()
    const subs = await getSubs({userId: session.id})
    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <TariffTable subs={subs}/>
        </div>
    )
}