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
        <div className="flex w-full flex-col sml:gap-[50px] gap-[25px] sml:py-[77px] py-[20px] xl:px-[129px] sml:px-[50px] px-[25px]">
            <MainBanner bg="sml:bg-pc-banner bg-personal-adaptive"/>
            <UserInfo/>
            <div className="flex mds:flex-row flex-col gap-[46px]">
                <PcBlock styles="mds:w-[413px] w-full" balance={user?.balance} session={session} title="BALANCE" num={user?.balance} btn={<DepositBlock className="cursor-pointer"/>}/>
                <ActiveSubs/>
            </div>
            {/*{session.role != "USER" && (*/}
            {/*    <PremiumBlock/>*/}
            {/*)}*/}
            <Transactions/>
        </div>
    )
}