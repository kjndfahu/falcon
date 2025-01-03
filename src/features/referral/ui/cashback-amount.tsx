export const CashbackAmount = ({totalCashback} :{totalCashback?: number | null }) => {
    return (
        <div className="flex w-full md:h-auto h-[500px] flex-col rounded-[15px] text-[24px] gap-3 bg-referral-block bg-cover bg-center px-[54px] py-8">
            Amount of cashback<br/> received
            <div className="flex w-min font-semibold text-[24px] rounded-[15px] p-2 bg-[#1952C1]">{(totalCashback ?? 0) + "$"}</div>
        </div>
    )
}