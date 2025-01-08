interface Props{
    child?:React.ReactNode,
}

export const PrBlock:React.FC<Props> = ({child}) => {
    return (
        <div className={`flex rounded-[15px] h-[182px] px-[25px] py-[28px] mds:w-[413px] w-full border-[1px] border-[#BEDAE9]`}>
            {child}
        </div>
    )
}