import {TariffTable} from "@/widgets/purchase-history/purchase-table";

export default async function PurchaseHistory() {
    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <TariffTable/>
        </div>
    )
}