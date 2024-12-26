import {UsersCount} from "@/widgets/users-count/users-count";
import {sessionService} from "@/enteties/user/services/session";
import {Dashboard} from "@/widgets/dashboard/dashboard";

export default async function DashboardPage() {
    const {session} = await sessionService.verifySession()
    return (
        <div className="flex w-full flex-col gap-[50px] px-[62px] pt-[77px]">
            <UsersCount/>
            <Dashboard session={session} />
        </div>
    )
}