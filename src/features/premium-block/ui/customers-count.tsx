interface Props{
    className?:string,
}

export const CustomersCount:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-col font-semibold text-[14px] text-black gap-[40px]">
            ACTIVE CUSTOMERS IN THE LAST 30 DAYS
            <h3 className="text-[42px] font-semibold text-[#101D2C]">+15</h3>
        </div>
    )
}