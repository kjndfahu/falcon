import {sessionService} from "@/enteties/user/services/session";

export async function UserInfo() {
    const {session} = await sessionService.verifySession()

    console.log(session.login)
    return (
        <div className="flex gap-1 text-[30px] leading-[30px] text-black font-medium flex-col">
            {session.login}
            <div className="flex items-center gap-3 text-[18px] text-[#4B5167]">
                Account number
                <div className="p-2 bg-[#e0edff] text-[16px] leading-[16px] text-[#0057FF] rounded-[15px]">{session.id}</div>
            </div>
        </div>
    )
}