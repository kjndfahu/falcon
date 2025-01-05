'use client';

import { statusHeadersAdaptive, statusValuesAdaptive } from "@/features/referral-programm/model/constants";

export const StatusTableAdaptive = () => {
    return (
        <div className="sm:hidden flex flex-col w-full gap-[25px] px-[20px]">
            {statusHeadersAdaptive.map((header, headerIndex) => (
                <div key={headerIndex} className="flex flex-col w-full">
                    <div className="flex items-center text-black flex-col w-full border-[1px] border-[#BEDAE9] bg-[#D7F1FE] p-[25px]">
                        <h2 className="text-[24px] font-medium">{header}</h2>
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col text-black">
                            {statusValuesAdaptive.map((row, rowIndex) => (
                                <div 
                                    key={rowIndex} 
                                    className="flex justify-between border-[1px] border-[#BEDAE9] items-center p-[25px]"
                                >
                                    <span className="text-[18px] text-[#4B5167]">{row.label}</span>
                                    <span className="text-[18px] text-[#0057FF] rounded-[15px] bg-[#EDF9FF] p-2">
                                        {row.values[headerIndex]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};