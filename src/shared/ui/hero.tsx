interface Props{
    title: string;
    text?:string;
    button?: React.ReactNode;
}
export const Hero:React.FC<Props> = ({title, text, button}) => {
    return (
        <div className="flex flex-col items-start text-white gap-[30px] justify-center px-[220px] text-[96px] leading-[87px] font-medium bg-blue-400 h-[600px]">
            {title}
            <p className="text-[18px] font-normal leading-[28px]">{text}</p>
        </div>
    )
}