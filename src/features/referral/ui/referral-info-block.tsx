import {CopyLogo} from "@/shared/ui/pc-icons";
import {LogoBlock} from "@/shared/ui/logo-block";

export const ReferralInfoBlock = ({firstlogo, firsttitle, firstvalue, secondlogo, secondtitle, secondvalue}: {
    firstlogo?: React.ReactNode;
    firsttitle?: string;
    firstvalue?: string;
    secondlogo?: React.ReactNode;
    secondtitle?: string;
    secondvalue?: string;
}) => {
    return (
        <div className="flex w-[842px] flex-row">
            <div
                className="flex w-[50%] gap-4 items-start whitespace-pre-wrap  flex-col py-8 px-[103px] text-[24px] leading-8 text-[#0A131D] border-[1px] border-[#CCE5F8] rounded-l-[15px]">
                <LogoBlock logo={firstlogo}/>
                {firsttitle}
                <div
                    className="text-[42px] leading-[50px] rounded-[15px] bg-[#deecff] p-[8px] font-bold text-[#0079FF]">{firstvalue}</div>
            </div>
            <div
                className="flex w-[50%] gap-4 items-start whitespace-pre-wrap bg-[#EDF9FF] flex-col py-8 px-[103px] text-[24px] leading-8 text-[#0A131D] border-[1px] border-[#CCE5F8] rounded-r-[15px]">
                <LogoBlock logo={secondlogo}/>
                {secondtitle}
                <div
                    className="text-[42px] leading-[50px] rounded-[15px] bg-[#deecff] p-[8px] font-bold text-[#0079FF]">{secondvalue}</div>
            </div>
        </div>
    )
}