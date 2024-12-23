import {ReferralBanner} from "@/features/referral/ui/referral-banner";
import {ReferralInfo} from "@/widgets/referral-info/referral-info";
import {sessionService} from "@/enteties/user/services/session";
import {getUserInfo} from "@/features/account-info/model/get-user";
import {CashbackAmount} from "@/features/referral/ui/cashback-amount";

export default async function ReferralPage() {
    const {session} = await sessionService.verifySession()
    const user = await getUserInfo({login: session.login})

    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <ReferralBanner balance={user?.balance} referralCode={user?.referralCode}/>
            <div className="flex gap-[50px] w-full flex-row">
                <div className="flex flex-col w-full">
                    <ReferralInfo/>
                </div>
                <CashbackAmount/>
            </div>
        </div>
    )
}