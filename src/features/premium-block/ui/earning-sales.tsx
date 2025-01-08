interface Props{
    totalPriceSales: number;
    totalEarns: number;
}

export const EarningSales:React.FC<Props> = ({totalEarns, totalPriceSales}) => {
    return (
        <div className="flex flex-col text-[14px] text-black gap-[40px]">
            EARNINGS / SALES
            <div className="flex mds:text-[42px] text-[30px] leading-[40px] items-center">
                <div className="pr-[25px] border-r-[2px] font-semibold text-[#77B900] border-[#BEDAE9]">
                    {totalEarns}$+
                </div>
                <div className="pl-[25px] font-semibold text-[#FF6C71]">
                    {totalPriceSales}$-
                </div>
            </div>
        </div>
    )
}