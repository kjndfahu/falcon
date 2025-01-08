import {ShareIcon} from "@/shared/ui/icons";

interface Props {
    logo1: React.ReactNode;
    blockstyles: string;
    title: string;
    text: string;
    laststyles: string;
    number?: React.ReactNode;
}

export const ReferralLevelsBlock:React.FC<Props> = ({logo1, blockstyles, title, text, laststyles, number}) => {

    return (
        <div className="flex mds:flex-row flex-col gap-[40px] font-extralight bg-[linear-gradient(258.62deg,_#272E6B_0%,_#0F1F54_100%)] border-[1px] rounded-[15px] border-[rgba(190,_218,_233,_0.1)] mds:w-[720px] w-full mds:h-[372px] justify-between mds:items-center sm:pl-[80px] pl-[30px] py-[65px] sm:pr-[65px]">
            {number}
            <div
                className="flex flex-col items-start text-[18px] leading-[28px] gap-[25px] mds:w-[384px] mds:h-[242px]">
                <div className={`flex items-center ${blockstyles} gap-[10px] py-[10px] px-[20px] rounded-[5px]`}>
                    {logo1}
                    {title}
                </div>
                <p className="font-extralight text-[#CFDAFF] text-[18px]">{text}</p>

                    <div
                        className={`flex text-white items-center gap-[10px] rounded-[5px] border-[1px] text-[16px] leading-[16px] p-[10px] border-[#D9D9FF]`}>
                        Formalize <span className={laststyles}>cooperation</span>
                        <ShareIcon/>
                    </div>
            </div>
        </div>
    )
}