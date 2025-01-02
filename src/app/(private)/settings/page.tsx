import {SettingsBlock} from "@/shared/ui/settings-block";
import {sessionService} from "@/enteties/user/services/session";
import {getUser} from "@/enteties/user/repositories/user";

export default async function SettingsPage() {
    const {session} = await sessionService.verifySession()
    const userEmail = await getUser({id: session.id})
    console.log(userEmail)

    return (
        <div className="flex flex-col sml:gap-[50px] gap-[25px] sml:px-[62px] px-[20px] sml:py-[77px] py-[25px]">
            <SettingsBlock title="Email" info={userEmail?.email} type="email"/>
            <SettingsBlock title="Password" info="********" type="password"/>
        </div>
    )
}