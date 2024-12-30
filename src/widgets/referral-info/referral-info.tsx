import {ReferralInfoBlock} from "@/features/referral/ui/referral-info-block";
import {FewUsers, UserCircle, UserPin, UserPlus} from "@/shared/ui/admin-icons";

interface Props{
    referralInfo:  {
        totalReferrals: number,
        registeredWithPurchase: number,
        totalCashback: number ,
        purchasesOfReferrals: number
    } | null
}


export const ReferralInfo:React.FC<Props> = ({referralInfo}) => {
    return (
        <div className="flex flex-col gap-[50px]">
            <ReferralInfoBlock
                firstlogo={<UserPin/>}
                firsttitle={"Registered at\nthe link"}
                firstvalue={referralInfo?.totalReferrals?.toString() || "0"}
                secondlogo={<UserPlus/>}
                secondtitle={"Registered made a\npurchase"}
                secondvalue={referralInfo?.registeredWithPurchase?.toString() || "0"}/>
            <ReferralInfoBlock
                firstlogo={<FewUsers/>}
                firsttitle={"Cashback\nreceived"}
                firstvalue={referralInfo?.totalCashback?.toString() + '$' || "0"}
                secondlogo={<UserCircle/>}
                secondtitle={"Purchases of\nreferrals"}
                secondvalue={referralInfo?.purchasesOfReferrals?.toString() + '$' || "0"}/>
        </div>
    )
}