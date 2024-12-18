interface Props{
    title: string;
    text?:string;
    banner: string;

}
export const Hero:React.FC<Props> = ({title, text, banner}) => {
    return (
        <div className={`flex flex-col ${banner} bg-cover bg-center items-start text-white gap-[30px] justify-center px-[220px] text-[96px] leading-[87px] font-medium h-[600px]`}>
            {title}
            <p className="text-[18px] font-normal leading-[28px]">{text}</p>
        </div>
    )
}