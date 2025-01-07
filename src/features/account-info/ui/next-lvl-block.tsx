interface Props{
    percentage?:number;
}

export const NextLvLBlock:React.FC<Props> = ({percentage}) => {
    const radius = 30;
    let offset = 0;
    const circumference = Math.PI * radius;
    if(percentage != undefined){
        offset = circumference - (percentage / 100) * circumference;
    }

    return (
        <div
            className="flex justify-between items-end rounded-[15px] px-[25px] py-[28px] w-[413px] border-[1px] border-[#BEDAE9]">
            <div className="flex flex-col text-[14px] text-black gap-[40px]">
                NEXT LVL
                <h3 className="text-[42px] font-semibold text-[#101D2C]">{percentage?.toFixed(1)}%</h3>
            </div>

            <div className="relative w-[170px] h-[85px]">
                <svg
                    className="absolute top-0 w-full h-full"
                    viewBox="0 0 80 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 35 A30 30 0 0 1 70 35"
                        fill="none"
                        stroke="#E5E9F2"
                        strokeWidth="8"
                    />
                    <path
                        d="M10 35 A30 30 0 0 1 70 35"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#56CCF2"/>
                            <stop offset="100%" stopColor="#2F80ED"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}