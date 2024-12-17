interface Props{
    title:string
    styles?:string;
}

export const BlueBtn:React.FC<Props> = ({styles, title}) => {
    return (
        <div className={`flex items-center text-white font-normal ${styles} justify-center text-[18px] leading-[23px] w-[350px] py-[13px] bg-[#0057FF] rounded-[15px]`}>
            {title}
        </div>
    )
}