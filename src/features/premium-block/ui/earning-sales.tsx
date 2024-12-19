interface Props{
    className?:string
}

export const EarningSales:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-col text-[14px] text-black gap-[40px]">
            EARNINGS / SALES
            <div className="flex text-[42px] leading-[40px] items-center">
                <div className="pr-[25px] border-r-[2px] font-semibold text-[#77B900] border-[#BEDAE9]">
                    250$+
                </div>
                <div className="pl-[25px] font-semibold text-[#FF6C71]">
                    100$-
                </div>
            </div>
        </div>
    )
}