interface Props{
    logo: React.ReactNode;
}

export const LogoBlock:React.FC<Props> = ({logo}) => {
    return (
        <div
            className="flex w-[42px] h-[42px] items-center p-2 justify-center bg-[#0A131D0D] rounded-[5px] border-[1px] border-[#AFC0D0]">
            {logo}
        </div>
    )
}