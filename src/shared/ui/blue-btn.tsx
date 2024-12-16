interface Props{
    title:string
}

export const BlueBtn:React.FC<Props> = ({title}) => {
    return (
        <div className="flex items-center font-normal justify-center text-[18px] leading-[23px] w-[350px] py-[13px] bg-[#0057FF] rounded-[15px]">
            {title}
        </div>
    )
}