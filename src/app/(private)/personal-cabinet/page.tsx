import {MainBanner} from "@/features/account-info/main-banner";
import {UserInfo} from "@/features/account-info/user-info";
import {PcBlock} from "@/shared/ui/pc-block";
import {DepositBlock} from "@/shared/ui/pc-icons";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {Transactions} from "@/features/account-info/transactions";
import {PremiumBlock} from "@/widgets/premium-block";

export default async function PersonalCabinet() {
    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <MainBanner bg="bg-pc-banner"/>
            <UserInfo/>
            <div className="flex gap-[46px]">
                <PcBlock title="BALANCE" num="$ 100.00" btn={<DepositBlock className="cursor-pointer"/>}/>
                <PcBlock title="ACTIVE SUBSCRIPTIONS" num="2" btn={<BlueBtn styles="w-[121px] cursor-pointer" title="Pusrchase"/>}/>
            </div>
            <PremiumBlock/>
            <Transactions/>
        </div>
    )
}