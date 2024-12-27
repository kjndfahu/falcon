interface Props{
    bg: string;
}

export const MainBanner:React.FC<Props> = ({bg}) => {
    return (
        <div className={`flex w-full sml:items-center bg-[100%_-180px] py-[53px] sml:bg-center sml:px-[67px] px-[20px] text-[64px] leading-[48px] text-[#EFF1FF] ${bg} rounded-[15px] bg-cover sml:h-[252px] h-[500px] sml:bg-center `}>
            Subscribe as<br/> soon as possible
        </div>
    )
}