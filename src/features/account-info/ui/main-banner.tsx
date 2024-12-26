interface Props{
    bg: string;
    styles: string;
}

export const MainBanner:React.FC<Props> = ({bg, styles}) => {
    return (
        <div className={`flex items-center px-[67px] text-[64px] leading-[48px] text-[#EFF1FF] ${bg} rounded-[15px] bg-cover ${styles} bg-center `}>
            Subscribe as<br/> soon as possible
        </div>
    )
}