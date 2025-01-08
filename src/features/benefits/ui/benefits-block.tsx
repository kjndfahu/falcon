import {ArrowRight} from "@/shared/ui/icons";
import Link from "next/link";

interface Props{
    title?:string;
    text?:string;
    logo?:React.ReactNode;
}

export const BenefitsBlock:React.FC<Props> = ({title, text, logo}) => {
    return (
        <div className="flex flex-col justify-between text-left bg-[#FFFFFF99] sm:w-[450px] w-full sm:mx-0 mx-[20px] h-[350px] px-[50px] border-[1px] backdrop-blur-xl text-[#0A131D] font-medium rounded-[15px] border-[#CAE8FF] text-[24px] py-9">
            <div className="flex flex-col gap-[25px]">
                <div
                    className="flex w-[42px] h-[42px] items-center p-2 justify-center bg-[#0A131D0D] rounded-[5px] border-[1px] border-[#AFC0D0]">
                    {logo}
                </div>
                <h3>{title}</h3>
                <p className="text-[18px] leading-[25px] font-normal text-[#4B5167]">{text}</p>
            </div>
            <div className="flex items-center text-[#4B5167] text-[18px] leading-[16px] gap-1">
                <Link href="/commands-features">
                    Read more
                </Link>
                <ArrowRight/>
            </div>
        </div>
    )
}