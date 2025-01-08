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
        <div className="flex xl:w-[842px] mdbvp:w-[640px] md:w-[450px] w-full md:gap-0 gap-[25px] md:flex-row flex-col">
            <div
                className="flex md:w-[50%] w-full gap-4 items-start whitespace-pre-wrap flex-col py-8 xl:px-[103px] mdbvp:px-[60px] md:px-[25px] px-[51px] text-[24px]  leading-8 text-[#0A131D] border-[1px] border-[#CCE5F8] md:rounded-r-[0px] rounded-r-[15px] rounded-l-[15px]">
                <LogoBlock logo={firstlogo}/>
                {firsttitle}
                <div className="text-[42px] leading-[50px] rounded-[15px] bg-[#deecff] p-[8px] font-bold text-[#0079FF]">{firstvalue}</div>
            </div>
            <div
                className="flex md:w-[50%] w-full gap-4 items-start whitespace-pre-wrap bg-[#EDF9FF] flex-col py-8 xl:px-[103px] mdbvp:px-[60px] md:px-[25px] px-[51px] text-[24px] leading-8 text-[#0A131D] border-[1px] border-[#CCE5F8] md:rounded-l-[0px] rounded-l-[15px] rounded-r-[15px]">
                <LogoBlock logo={secondlogo}/>
                {secondtitle}
                <div
                    className="text-[42px] leading-[50px] rounded-[15px] bg-[#deecff] p-[8px] font-bold text-[#0079FF]">{secondvalue}</div>
            </div>
        </div>
    )
}