import {AdminPurchaseTable} from "@/features/admin-purchase-history/ui/admin-purchase-table";
import {getAllSubscriptions} from "@/enteties/subscription/repositories/subscription";

export default async function AdminPurchaseHistoryPage(){
    const subs = await getAllSubscriptions()
    return (
        <div className="flex w-full flex-col gap-[50px] sml:py-[77px] py-[25px] xl:px-[129px] lg:px-[100px] mdbvp:px-[50px] sm:px-[20px]">
            <AdminPurchaseTable subs={subs} />
        </div>
    )
}