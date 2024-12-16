interface Props{
    title:string;
    text: string;
}

export const Texts:React.FC<Props> = ({title, text}) => {
    return (
        <div className="flex flex-col gap-3 text-[#0A131D] text-[36px] leading-[45px] font-bold">
            <h3>{title}</h3>
            <p className="text-[#4B5167] text-[18px] leading-[24px] font-normal">{text}</p>
        </div>
    )
}