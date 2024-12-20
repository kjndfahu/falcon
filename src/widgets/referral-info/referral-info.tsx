import {ReferralInfoBlock} from "@/features/referral/ui/referral-info-block";
import {UserPin} from "@/shared/ui/admin-icons";


export const ReferralInfo = () => {
    return (
        <div className="flex flex-col gap-[50px]">
            <ReferralInfoBlock
                firstlogo={<UserPin/>}
                firsttitle={"Registered at\nthe link"}
                firstvalue="2"
                secondlogo={<UserPin/>}
                secondtitle={"Registered made a\npurchase"}
                secondvalue="15"/>
            <ReferralInfoBlock
                firstlogo={<UserPin/>}
                firsttitle={"Registered at\nthe link"}
                firstvalue="2"
                secondlogo={<UserPin/>}
                secondtitle={"Registered made a\npurchase"}
                secondvalue="15"/>
        </div>
    )
}