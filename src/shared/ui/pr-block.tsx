interface Props{
    child?:React.ReactNode,
}

export const PrBlock:React.FC<Props> = ({child}) => {
    return (
        <div className={`flex rounded-[15px] h-[182px] px-[25px] py-[28px] w-[413px] border-[1px] border-[#BEDAE9]`}>
            {child}
        </div>
    )
}