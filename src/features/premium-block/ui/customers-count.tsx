interface Props{
    getCustomers: number;
}

export const CustomersCount:React.FC<Props> = ({getCustomers}) => {
    return (
        <div className="flex flex-col text-[14px] text-black gap-[40px]">
            ACTIVE CUSTOMERS IN THE LAST 30 DAYS
            <h3 className="mds:text-[42px] text-[30px] font-semibold text-[#101D2C]">{getCustomers}</h3>
        </div>
    )
}