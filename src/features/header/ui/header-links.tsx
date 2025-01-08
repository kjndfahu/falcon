import { headerLinks } from "@/features/header/model/constants";
import Link from "next/link";

export const HeaderLinks = () => {
    const scrollToAnchor = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex md:flex-row flex-col md:items-center xl:gap-[25px] lg:gap-[15px] gap-[10px]">
            {headerLinks.map((item) =>
                item.link === "/features" || item.link === "/pricing" ? (
                    <div
                        key={item.link}
                        onClick={() =>
                            scrollToAnchor(item.link === "/features" ? "features-section" : "pricing-section")
                        }
                        className="text-[16px] cursor-pointer py-2 px-[8px] border-[1px] border-transparent rounded-[10px] text-[#4B5167] leading-[20px] hover:border-[#0057FF] hover:bg-[#0057FF1A] hover:text-[#0057FF]"
                    >
                        {item.title}
                    </div>
                ) : (
                    <Link key={item.link} href={item.link}>
                        <div
                            className="text-[16px] cursor-pointer py-2 px-[8px] border-[1px] border-transparent rounded-[10px] text-[#4B5167] leading-[20px] hover:border-[#0057FF] hover:bg-[#0057FF1A] hover:text-[#0057FF]"
                        >
                            {item.title}
                        </div>
                    </Link>
                )
            )}
        </div>
    );
};
