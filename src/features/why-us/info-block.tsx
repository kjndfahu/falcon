import {LogoBlock} from "@/shared/ui/logo-block";

interface Props{
    title: string;
    text: string;
    logo: React.ReactNode;
}

export const InfoBlock: React.FC<Props> = ({title, text, logo}) => {
    return (
        <div className="flex flex-col py-[42px] px-[51px] w-[720px] gap-[25px] border-[1px] text-[#0A131D] text-[24px] leading-[32px] font-medium rounded-[15px] border-[#CCE5F8]">
            <LogoBlock logo={logo}/>
            <h3>{title}</h3>
            <p className="text-[18px] leading-[25px] font-normal text-[#4B5167]">{text}</p>
        </div>
    )
}