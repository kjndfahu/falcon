import {Saved} from "@/shared/ui/icons";

interface Props{
    title: string;
    text: string;
}

export const SupportBlock:React.FC<Props> = ({title, text}) => {
    return (
        <div className="flex flex-col gap-6 rounded-[15px] bg-[#f4f8fc]">
            <div
                className="flex items-center border-b-[1px] border-[#DDE6EF] py-[18px] px-[16px] font-medium text-[#0A131D] text-[24px] leading-[28px] gap-[10px]">
                <Saved/>
                {title}
            </div>
            <div className="flex py-[18px] font-normal px-[16px] text-[#0057FF] text-[18px] leading-[21px]">
                {text}
            </div>
        </div>
    )
}