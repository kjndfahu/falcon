import {TariffTable} from "@/widgets/purchase-history/purchase-table";
import {sessionService} from "@/enteties/user/services/session";
import {getActiveSubs} from "@/enteties/subscription/services/get-active-subs";

export default async function PurchaseHistory() {
    const {session} = await sessionService.verifySession()
    const activeSubs = await getActiveSubs({userId: session.id})
    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <TariffTable activeSubs={activeSubs}/>
        </div>
    )
}