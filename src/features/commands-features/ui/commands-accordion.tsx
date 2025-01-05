'use client';

import React, { useEffect } from 'react';
import { commandsData } from "@/features/commands-features/actions/constants";
import { useAccordion } from "@/features/faq/model/useAccordion";
import { LogoBlock } from "@/shared/ui/logo-block";
import { Arrow } from "@/shared/ui/icons";
import { useCommandsContext } from "../model/commands-context";

export const CommandsAccordion: React.FC = () => {
    const { openId, toggleAccordion, setOpenId } = useAccordion();
    const { searchTerm } = useCommandsContext();

    const highlightText = (text: string) => {
        if (!searchTerm) return text;
        
        const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) => 
                    part.toLowerCase() === searchTerm.toLowerCase() ? 
                        <span key={i} className="bg-[#EDF9FF]">{part}</span> :
                        part
                )}
            </span>
        );
    };

    useEffect(() => {
        if (searchTerm) {
            const matchingSection = commandsData.find(section => 
                section.content.some(item => 
                    item.maintext.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
            if (matchingSection) {
                setOpenId(matchingSection.id);
            }
        }
    }, [searchTerm, setOpenId]);

    return (
        <div className="flex flex-col w-full sml:mb-[70px] mb-[25px] gap-[25px]">
            {commandsData.map((item) => (
                <div key={item.id} className="rounded-[15px] border-[1px] border-[#BEDAE9]">
                    <button
                        onClick={() => toggleAccordion(item.id)}
                        className={`w-full ${
                            openId === item.id ? 'border-b-[1px] border-[#BEDAE9] rounded-t-[15px]' : 'rounded-[15px]'
                        } text-left px-[42px] py-12 flex justify-between items-center bg-white`}
                    >
                        <span className="font-semibold text-[24px] leading-[30px] text-black">
                            {highlightText(item.title)}
                        </span>
                        <span
                            className={`transform transition-transform ${
                                openId === item.id ? 'rotate-180' : 'rotate-0'
                            }`}
                        >
                            <LogoBlock logo={<Arrow />} />
                        </span>
                    </button>

                    {openId === item.id && (
                        <div className="rounded-b-[15px] w-full px-[42px] pt-[12px] pb-[40px] flex flex-col gap-[20px] bg-white custom-scroll max-h-[400px] overflow-y-auto">
                            {item.content.map((contentItem, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col w-full border-b-[2px] border-[#DDE6EF] py-[25px] ${
                                        searchTerm && contentItem.maintext.toLowerCase().includes(searchTerm.toLowerCase())
                                            ? 'bg-[#EDF9FF]'
                                            : ''
                                    }`}
                                >
                                    <span className="text-[24px] text-black">
                                        {highlightText(contentItem.maintext)}
                                    </span>
                                    <p className="mds:text-[24px] text-[16px] text-[#4B5167]">
                                        {highlightText(contentItem.description)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
