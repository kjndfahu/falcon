interface Props{
    bg: string;
}

export const MainBanner:React.FC<Props> = ({bg}) => {
    return (
        <div className={`flex items-center px-[67px] text-[64px] leading-[48px] text-[#EFF1FF] ${bg}  rounded-[15px] bg-cover h-[252px] bg-center `}>
            Subscribe as<br/> soon as possible
        </div>
    )
}