import {SettingsBlock} from "@/shared/ui/settings-block";
import {sessionService} from "@/enteties/user/services/session";

export default async function SettingsPage() {
    const {session} = await sessionService.verifySession()

    return (
        <div className="flex flex-col sml:gap-[50px] gap-[25px] sml:px-[62px] px-[20px] sml:py-[77px] py-[25px]">
            <SettingsBlock title="Email" info={session.email}/>
            <SettingsBlock title="Password" info="********"/>
        </div>
    )
}