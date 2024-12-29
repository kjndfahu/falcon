import {UsersCount} from "@/widgets/users-count/users-count";
import {sessionService} from "@/enteties/user/services/session";
import {PrBlock} from "@/shared/ui/pr-block";
import {SubsCount} from "@/features/dashboard/ui/subs-count";
import {userRepository} from "@/enteties/user/repositories/user";
import {BalanceCount} from "@/features/dashboard/ui/balance-count";
import {calculateTotalBalance} from "@/features/dashboard/actions/get-total-balance";

export default async function DashboardPage() {
    const {session} = await sessionService.verifySession()
    const now = new Date();
    const activeSubs = await userRepository.getActiveSubscriptions(now)
    const sum = await calculateTotalBalance()
    const userAndBalance = await userRepository.getUserAndBalance()
    console.log(userAndBalance)
    return (
        <div className="flex w-full flex-col gap-[50px] px-[62px] pt-[77px]">
            <UsersCount/>
            <div className='flex gap-[50px]'>
                <PrBlock child={ <SubsCount activeSubs={activeSubs.length}/> }/>
                <PrBlock child={ <BalanceCount userAndBalance={userAndBalance} sum={sum}/> }/>
            </div>
        </div>
    )
}