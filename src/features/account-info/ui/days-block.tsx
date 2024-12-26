'use client';

import {PromoBlock} from "@/shared/ui/promo-block";

interface Props {
    selectedDays: number;
    setSelectedDays: (days: number) => void;
}

export const DaysBlock: React.FC<Props> = ({ selectedDays, setSelectedDays }) => {
    const daysOptions = [
        { days: 30, discount: null },
        { days: 90, discount: "10%" },
        { days: 180, discount: "50%" }
    ];

    return (
        <div className="flex p-[20px] bg-[#F3FAFF] border-[1px] border-[#D8EEFF] rounded-[12px] gap-[31px]">
            {daysOptions.map((option) => (
                <div
                    key={option.days}
                    onClick={() => setSelectedDays(option.days)}
                    className={`flex gap-[10px] text-[24px] rounded-[10px] leading-[30px] border-[#BCE3FF] border-[1px] px-[18px] py-[10px] cursor-pointer ${
                        selectedDays === option.days ? 'bg-[#E5F3FF]' : ''
                    }`}
                >
                    {option.days} days
                    {option.discount && (
                        <PromoBlock 
                            title={`Save ${option.discount}`} 
                            styles={option.days === 90 
                                ? "bg-[linear-gradient(102.67deg,_#6072B1_3.55%,_#1725A4_100%)]"
                                : "bg-[linear-gradient(95.02deg,_#0027B3_4.13%,_#0066FF_96.05%)]"
                            }
                        />
                    )}
                </div>
            ))}
        </div>
    );
};
