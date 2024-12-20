import {PromoBlock} from "@/shared/ui/promo-block";

interface Props{
    className?:string,
}

export const DaysBlock:React.FC<Props> = ({className}) => {
    return (
        <div className="flex p-[20px] bg-[#F3FAFF] border-[1px] border-[#D8EEFF] rounded-[12px] gap-[31px]">
            <div className="flex text-[24px] rounded-[10px] leading-[30px] border-[#BCE3FF] border-[1px] px-[18px] py-[10px]">
                30 days</div>
            <div className="flex gap-[10px] text-[24px] rounded-[10px] leading-[30px] border-[#BCE3FF] border-[1px] px-[18px] py-[10px]">
                90 days
                <PromoBlock title="Save 10%" styles="bg-[linear-gradient(102.67deg,_#6072B1_3.55%,_#1725A4_100%)]"/>
            </div>
            <div className="flex gap-[10px] text-[24px] rounded-[10px] leading-[30px] border-[#BCE3FF] border-[1px] px-[18px] py-[10px]">
                180 days
                <PromoBlock title="Save 50%" styles="bg-[linear-gradient(95.02deg,_#0027B3_4.13%,_#0066FF_96.05%)]"/>
            </div>
        </div>
    )
}