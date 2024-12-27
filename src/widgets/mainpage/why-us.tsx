import {Texts} from "@/shared/ui/texts";
import {InfoBlock} from "@/features/why-us/info-block";
import {AlertLogo, ClockLogo, LayersLogo, WindowsLogo} from "@/shared/ui/icons";

export const WhyUs = () => {
    return (
        <div className="flex flex-col gap-[50px] items-center text-center">
            <Texts title="Why Us" text="Built for you, trusted by many" />
            <div className="flex text-left flex-col gap-[40px]">
                <div className="flex items-center justify-center flex-wrap xl:gap-[40px] gap-[25px] xl:justify-between">
                    <InfoBlock title="24/7 Support"
                               text="Our team is available around the clock to assist you with any questions or issues."
                               logo={ <AlertLogo/> }/>
                    <InfoBlock title="Real-Time Alerts"
                               text="Stay ahead with instant notifications Get real-time alerts for important events"
                               logo={ <ClockLogo/> }/>
                </div>
                <div className="flex items-center justify-center flex-wrap xl:gap-[40px] gap-[25px] xl:justify-between">
                    <InfoBlock title="99% Uptime Reliability"
                               text="Enjoy uninterrupted service with 99% uptime. Forget about downtime and focus on what matters."
                               logo={ <LayersLogo/> }/>
                    <InfoBlock title="Advanced Features"
                               text="Get access to powerful commands that make your game easier and more enjoyable."
                               logo={ <WindowsLogo/> }/>
                </div>
            </div>
        </div>
    )
}