import {PromoBlock} from "@/shared/ui/promo-block";

interface Props{
    activeDays: string;
    setActiveDays(activeDays: string): void;
}

export const DaysBlock:React.FC<Props> = ({activeDays, setActiveDays}) => {
    return (
        <div className="flex items-center w-full sml:flex-row flex-col p-[20px] bg-[#F3FAFF] border-[1px] border-[#D8EEFF] rounded-[12px] gap-[31px] ">
            <div 
                onClick={() => setActiveDays('30')} 
                className={`flex ${activeDays === '30' ? 'bg-[#0094FF] text-white' : ''} text-[24px] cursor-pointer sml:w-auto w-[120px] rounded-[10px] leading-[30px] border-[#BCE3FF] border-[1px] px-[18px] py-[10px]`}
            >
                30 days
            </div>
            <div 
                onClick={() => setActiveDays('90')} 
                className={`flex ${activeDays === '90' ? 'bg-[#0094FF] text-white' : ''} gap-[10px] text-[24px] rounded-[10px] sml:w-auto w-[200px] leading-[30px] cursor-pointer border-[#BCE3FF] border-[1px] px-[18px] py-[10px]`}
            >
                90 days
                <PromoBlock title="Save 10%" styles="bg-[linear-gradient(102.67deg,_#6072B1_3.55%,_#1725A4_100%)]"/>
            </div>
            <div 
                onClick={() => setActiveDays('180')} 
                className={`flex ${activeDays === '180' ? 'bg-[#0094FF] text-white' : ''} gap-[10px] text-[24px] rounded-[10px] sml:w-auto w-[230px] leading-[30px] cursor-pointer border-[#BCE3FF] border-[1px] px-[18px] py-[10px]`}
            >
                180 days
                <PromoBlock title="Save 50%" styles="bg-[linear-gradient(95.02deg,_#0027B3_4.13%,_#0066FF_96.05%)]"/>
            </div>
        </div>
    )
}