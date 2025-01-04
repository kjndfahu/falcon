import {ReferralBanner} from "@/features/referral/ui/referral-banner";
import {ReferralInfo} from "@/widgets/referral-info/referral-info";
import {sessionService} from "@/enteties/user/services/session";
import {getUserInfo} from "@/features/account-info/model/get-user";
import {CashbackAmount} from "@/features/referral/ui/cashback-amount";
import {getReferralInfo} from "@/enteties/user/repositories/user";

export default async function ReferralPage() {
    const {session} = await sessionService.verifySession()
    const user = await getUserInfo({login: session.login})
    const referralInfo = await getReferralInfo(session.id)
    console.log(referralInfo)

    return (
        <div className="flex w-full flex-col xl:gap-[50px] mdbvp:gap-[30px] gap-[15px] py-[77px] xl:px-[129px] md:px-[40px] px-[20px]">
            <ReferralBanner balance={user?.balance} referralCode={user?.referralCode}/>
            <div className="flex xl:gap-[50px] mdbvp:gap-[30px] gap-[15px] w-full md:flex-row flex-col">
                <div className="flex flex-col w-full">
                    <ReferralInfo referralInfo={referralInfo}/>
                </div>
                <CashbackAmount totalCashback={referralInfo?.totalCashback}/>
            </div>
        </div>
    )
}