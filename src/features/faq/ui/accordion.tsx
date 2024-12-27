import React from "react";
import {FaqItem} from "@/features/faq/model/constants";
import {LogoBlock} from "@/shared/ui/logo-block";
import {Arrow} from "@/shared/ui/icons";

interface AccordionProps {
    data: FaqItem[];
    openId: number | null;
    toggleAccordion: (id: number) => void;
}

export const Accordion: React.FC<AccordionProps> = ({ data, openId, toggleAccordion }) => {
    return (
        <div className="flex flex-col w-full gap-[25px] xl:px-[220px] lg:px-[150px] mdbvp:px-[100px] sml:px-[50px] px-[20px]">
            {data.map((item) => (
                <div key={item.id} className="rounded-[15px] border-[1px] border-[#BEDAE9]">
                    <button onClick={() => toggleAccordion(item.id)} className="w-full rounded-[15px] text-left px-[42px] py-12 flex justify-between items-center bg-white">
                        <span className="font-semibold text-[24px] leading-[30px] text-black">{item.title}</span>
                        <span className={`transform transition-transform ${openId === item.id ? "rotate-180" : "rotate-0"}`}>
                            <LogoBlock logo={<Arrow/>}/>
                        </span>
                    </button>
                    {openId === item.id && (
                        <div className="rounded-b-[15px] px-[42px] py-12 flex text-[18px] text-[#4B5167] bg-white">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
