import {headerLinks} from "@/features/header/model/constants";
import Link from "next/link";

export const HeaderLinks = () => {
    return (
        <div className="flex smbvp:flex-row flex-col smbvp:items-center xl:gap-[25px] mdbvp:gap-[15px] md:gap-[10px] gap-[5px]">
            {headerLinks.map((item) => (
                <Link key={item.link} href={item.link}>
                    <div
                         className="mdbvp:text-[16px] text-[14px] cursor-pointer py-2 px-[8px] border-[1px] border-transparent rounded-[10px] text-[#4B5167] leading-[20px] hover:border-[#0057FF] hover:bg-[#0057FF1A] hover:text-[#0057FF]">
                        {item.title}
                    </div>
                </Link>
            ))}
        </div>
    )
}