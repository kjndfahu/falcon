interface Props {
    title: string,
    info: string;
}

export const SettingsBlock:React.FC<Props> = ({title, info}) => {
    return (
        <div className="flex justify-between px-[40px] border-[1px] bg-[#F6FCFF] border-[#CCE5F8] rounded-[15px] w-[548px] py-[25px]">
            <div className="flex flex-col text-[#4B5167] leading-[25px] text-[18px] gap-3">
                {title}
                <h3 className="text-[24px] font-medium text-[#0A131D]">{info}</h3>
            </div>
            <div className="flex items-center cursor-pointer justify-center bg-[#0057FF] px-[47px] text-[18px] text-white rounded-[15px]">
                Change
            </div>
        </div>
    )
}