import {MainBanner} from "@/features/account-info/ui/main-banner";
import {UserInfo} from "@/features/account-info/ui/user-info";
import {PcBlock} from "@/shared/ui/pc-block";
import {DepositBlock} from "@/shared/ui/pc-icons";
import {Transactions} from "@/features/account-info/ui/transactions";
import {PremiumBlock} from "@/widgets/premium-block";
import {sessionService} from "@/enteties/user/services/session";
import {getUserInfo} from "@/features/account-info/model/get-user";
import {ActiveSubs} from "@/features/account-info/ui/active-subs";

export default async function PersonalCabinet() {
    const {session} = await sessionService.verifySession()
    const user = await getUserInfo({login: session.login})

    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <MainBanner bg="bg-pc-banner"/>
            <UserInfo/>
            <div className="flex gap-[46px]">
                <PcBlock balance={user?.balance} session={session} title="BALANCE" num={user?.balance} btn={<DepositBlock className="cursor-pointer"/>}/>
                <ActiveSubs/>
            </div>
            {session.role != "USER" && (
                <PremiumBlock/>
            )}
            <Transactions/>
        </div>
    )
}