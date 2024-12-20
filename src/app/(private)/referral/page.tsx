import {ReferralBanner} from "@/features/referral/ui/referral-banner";
import {ReferralInfo} from "@/widgets/referral-info/referral-info";

export default async function ReferralPage() {
    return (
        <div className="flex w-full flex-col gap-[50px] py-[77px] px-[129px]">
            <ReferralBanner />
            <div className="flex w-full">
                <ReferralInfo/>
            </div>
        </div>
    )
}