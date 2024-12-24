'use client';

import {PromoBlock} from "@/shared/ui/promo-block";

interface Props {
    selectedDays: number;
    setSelectedDays: (days: number) => void;
}

export const DaysBlock: React.FC<Props> = ({ selectedDays, setSelectedDays }) => {
    return (
        <div className="flex p-[20px] bg-[#F3FAFF] text-black border-[1px] border-[#D8EEFF] rounded-[12px] gap-[31px]">
            <button 
                onClick={() => setSelectedDays(30)}
                className={`flex text-[24px] rounded-[10px] leading-[30px] border-[#BCE3FF] border-[1px] px-[18px] py-[10px] ${
                    selectedDays === 30 ? 'bg-[#0057FF] text-white' : ''
                }`}
            >
                30 days
            </button>
            <button 
                onClick={() => setSelectedDays(90)}
                className={`flex gap-[10px] text-[24px] rounded-[10px] leading-[30px] border-[#BCE3FF] border-[1px] px-[18px] py-[10px] ${
                    selectedDays === 90 ? 'bg-[#0057FF] text-white' : ''
                }`}
            >
                90 days
                <PromoBlock title="Save 10%" styles="bg-[linear-gradient(102.67deg,_#6072B1_3.55%,_#1725A4_100%)]"/>
            </button>
            <button 
                onClick={() => setSelectedDays(180)}
                className={`flex gap-[10px] text-[24px] rounded-[10px] leading-[30px] border-[#BCE3FF] border-[1px] px-[18px] py-[10px] ${
                    selectedDays === 180 ? 'bg-[#0057FF] text-white' : ''
                }`}
            >
                180 days
                <PromoBlock title="Save 50%" styles="bg-[linear-gradient(95.02deg,_#0027B3_4.13%,_#0066FF_96.05%)]"/>
            </button>
        </div>
    )
}
