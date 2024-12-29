import {ReferralInfoBlock} from "@/features/referral/ui/referral-info-block";
import {FewUsers, UserCircle, UserPin, UserPlus} from "@/shared/ui/admin-icons";


export const ReferralInfo = () => {
    return (
        <div className="flex flex-col gap-[50px]">
            <ReferralInfoBlock
                firstlogo={<UserPin/>}
                firsttitle={"Registered at\nthe link"}
                firstvalue="2"
                secondlogo={<UserPlus/>}
                secondtitle={"Registered made a\npurchase"}
                secondvalue="15"/>
            <ReferralInfoBlock
                firstlogo={<FewUsers/>}
                firsttitle={"Registered at\nthe link"}
                firstvalue="2"
                secondlogo={<UserCircle/>}
                secondtitle={"Registered made a\npurchase"}
                secondvalue="15"/>
        </div>
    )
}