'use client'
import { TelegramLogo, TelegramLogoBlack} from "@/shared/ui/icons";
import Link from "next/link";

interface Props {
    example: string;
}

export const TelegramBlock:React.FC<Props> = ({example}) => {
    return (
        <div className="flex flex-col gap-6 rounded-[15px] bg-[#f4f8fc]">
            <div
                className="flex items-center border-b-[1px] border-[#DDE6EF] py-[18px] px-[16px] font-medium text-[#0A131D] text-[24px] leading-[28px] gap-[10px]">
                <TelegramLogo/>
                Contact Telegram
            </div>
            <div className="flex justify-between py-[18px] font-normal px-[16px] text-[#67748E] text-[18px] leading-[21px]">
                {example}
                <Link href={example}>
                    <TelegramLogoBlack className="cursor-pointer"/>
                </Link>
            </div>
        </div>
    )
}