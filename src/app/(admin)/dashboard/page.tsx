import {UsersCount} from "@/widgets/users-count/users-count";;
import {PrBlock} from "@/shared/ui/pr-block";
import {SubsCount} from "@/features/dashboard/ui/subs-count";
import {getUsersAndCreatedAt, userRepository} from "@/enteties/user/repositories/user";
import {BalanceCount} from "@/features/dashboard/ui/balance-count";
import {calculateTotalBalance} from "@/features/dashboard/actions/get-total-balance";
import {PaymentTypes} from "@/features/dashboard/ui/payment-types";
import {subscriptionCounts} from "@/features/dashboard/actions/subs-count";

export default async function DashboardPage() {
    const now = new Date();
    const activeSubs = await userRepository.getActiveSubscriptions(now)
    const sum = await calculateTotalBalance()
    const userAndBalance = await userRepository.getUserAndBalance()
    console.log(userAndBalance)
    const users = await getUsersAndCreatedAt()
    console.log(users)



    return (
        <div className="flex w-full flex-col gap-[50px] px-[62px] pt-[77px]">
            <UsersCount users={users}/>
            <div className='flex gap-[50px]'>
                <PrBlock child={ <SubsCount subscriptionCounts={subscriptionCounts} activeSubs={activeSubs.length}/> }/>
                <PrBlock child={ <BalanceCount userAndBalance={userAndBalance} sum={sum}/> }/>
                <PrBlock child={ <PaymentTypes/> }/>
            </div>
        </div>
    )
}