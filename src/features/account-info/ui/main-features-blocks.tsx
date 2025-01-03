import {InfoBlock} from "@/features/why-us/info-block";
import bars from '../../../shared/assets/img/BarsChart.png'
import pie from '../../../shared/assets/img/PieChart.png'
import wrap from '../../../shared/assets/img/Wrap.png'
import arrow from '../../../shared/assets/img/ArrowUp.png'
import {ArrowRight, SaveIcon} from "@/shared/ui/icons";
import {LogoBlock} from "@/shared/ui/logo-block";
import Image from 'next/image'

const tools = [
    {
        title: "Shield Tracker",
        description:
            "This tool tracks players shield and fury status, keeping you informed when shields drop or fury is activated",
        icon: "/path/to/icon1.png",
    },
    {
        title: "Player Tracker",
        description:
            "Feature monitors a player's location and in-game activity in real time. Track their movements, actions.",
        icon: "../../../shared/assets/img/BarsChart.png",
    },
    {
        title: "Migration Assistant/Migration Tools",
        description:
            "The Migration Assistant helps you find the best kingdom based on your specific criteria. Simply input your preferences, and the tool will recommend the most suitable kingdom that aligns with your playstyle and objectives.",
        icon: "/path/to/icon3.png",
    },
    {
        title: "WOW & K71 Tracker",
        description:
            "Find the nearest war, track your opponents by kingdom number, or use other filters to get the most relevant information in real time. This tool helps you stay ahead by providing key details to optimize your strategy.",
        icon: "/path/to/icon4.png",
    },
];

export const MainFeaturesBlocks = () => {
    return (
        <div className="flex flex-col w-full gap-[50px]">
            <div className="flex w-full justify-between">
                <div
                    className="flex relative bg-[#e6f3ff] flex-col justify-between w-[520px] h-[460px] rounded-[15px] border-[1px] border-[#CAE8FF] px-[50px] pt-[36px] pb-[43px]">
                    <div
                        className="flex justify-between items-start text-left flex-col w-full gap-[25px] text-[#0A131D] text-[24px] leading-[32px] font-medium rounded-[15px] ">
                        <LogoBlock logo={<SaveIcon/>}/>
                        <h3>Shield Tracker</h3>
                        <p className="text-[18px] leading-[25px] font-normal text-[#4B5167]">This tool tracks players
                            shield and fury status,<br/> keeping you informed when shields drop or<br/> fury is
                            activated
                        </p>
                    </div>
                    <div className="flex items-center text-[#4B5167] text-[18px] leading-[16px] gap-1">
                        Read more
                        <ArrowRight/>
                    </div>
                    <div className="absolute bottom-0 right-0 mr-[42px]">
                        <Image src={arrow} alt="/"/>
                    </div>
                </div>
                <div
                    className="flex relative bg-[#ebf9ff] flex-col justify-between w-[858px] h-[460px] rounded-[15px] border-[1px] border-[#CAE8FF] px-[50px] pt-[36px] pb-[43px]">
                    <div
                        className="flex justify-between items-start text-left flex-col w-full gap-[25px] text-[#0A131D] text-[24px] leading-[32px] font-medium rounded-[15px] ">
                        <LogoBlock logo={<SaveIcon/>}/>
                        <h3>Player Tracker</h3>
                        <p className="text-[18px] leading-[25px] font-normal text-[#4B5167]">Feature monitors a player's
                            location and in-game<br/> activity in real time. Track their movements, actions.</p>
                    </div>
                    <div className="flex items-center text-[#4B5167] text-[18px] leading-[16px] gap-1">
                        Read more
                        <ArrowRight/>
                    </div>
                    <div className="absolute bottom-0 right-0 mr-[42px]">
                        <Image src={bars} alt="/"/>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between">
                <div
                    className="flex relative bg-[#ebf9ff] flex-col justify-between w-[858px] h-[460px] rounded-[15px] border-[1px] border-[#CAE8FF] px-[50px] pt-[36px] pb-[43px]">
                    <div
                        className="flex justify-between items-start text-left flex-col w-full gap-[25px] text-[#0A131D] text-[24px] leading-[32px] font-medium rounded-[15px] ">
                        <LogoBlock logo={<SaveIcon/>}/>
                        <h3>Migration Assistant/<br/> Migration Tools</h3>
                        <p className="text-[18px] leading-[25px] font-normal text-[#4B5167]">The Migration Assistant helps you find the<br/>
                            best kingdom based on your specific criteria.<br/>
                            Simply input your preferences, and the tool<br/>
                            will recommend the most suitable kingdom<br/>
                            that aligns with your playstyle and objectives.</p>
                    </div>
                    <div className="flex items-center text-[#4B5167] text-[18px] leading-[16px] gap-1">
                        Read more
                        <ArrowRight/>
                    </div>
                    <div className="absolute bottom-0 right-0 mr-[42px]">
                        <Image src={pie} alt="/"/>
                    </div>
                </div>
                <div
                    className="flex relative bg-[#e6f3ff] flex-col justify-between w-[520px] h-[460px] rounded-[15px] border-[1px] border-[#CAE8FF] px-[50px] pt-[36px] pb-[43px]">
                    <div
                        className="flex justify-between items-start text-left flex-col w-full gap-[25px] text-[#0A131D] text-[24px] leading-[32px] font-medium rounded-[15px] ">
                        <LogoBlock logo={<SaveIcon/>}/>
                        <h3>Shield Tracker</h3>
                        <p className="text-[18px] leading-[25px] font-normal text-[#4B5167]">This tool tracks players
                            shield and fury status,<br/> keeping you informed when shields drop or<br/> fury is
                            activated
                        </p>
                    </div>
                    <div className="flex items-center text-[#4B5167] text-[18px] leading-[16px] gap-1">
                        Read more
                        <ArrowRight/>
                    </div>
                    <div className="absolute bottom-0 right-0 mr-[28px]">
                        <Image src={wrap} alt="/"/>
                    </div>
                </div>
            </div>
        </div>
    );
}