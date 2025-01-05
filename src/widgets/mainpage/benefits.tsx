import {BenefitsBlock} from "@/features/benefits/ui/benefits-block";
import {BlocksLogo, LiveLogo, ThunderLogo} from "@/shared/ui/icons";

export const Benefits = () => {
    return (
        <div className="flex items-center flex-col w-full gap-[112px] text-center py-[95px] bg-bubbles-banner">
            <div className="flex flex-col gap-[25px] text-[36px] px-0 leading-[36px] font-semibold text-[#0A131D]">
                <h3>How is your comfort measured?</h3>
                <p className="text-[18px] font-normal text-[#4B5167] leading-[27px]">Real-time statistics Instant information about what is happening<br/> happening in game map, full control and dozens of features</p>
            </div>
            <div className="flex flex-wrap items-center justify-center xl:gap-[50px] gap-[25px]">
                <BenefitsBlock title="Instant Activation" text="Enjoy uninterrupted service with 99% uptime. Forget about downtime and focus on what matters." logo={ <ThunderLogo/> }/>
                <BenefitsBlock title="Click and done" text="Designed for simplicity and big victories. Our intuitive interface ensures you can focus on the game, not on learning the software." logo={ <BlocksLogo/> }/>
                <BenefitsBlock title="Regular Updates" text="We regularly update the bot, ensuring it evolves with the game and offers the latest features for maximum enjoy enjoyment." logo={ <LiveLogo/> }/>
            </div>
        </div>
    )
}