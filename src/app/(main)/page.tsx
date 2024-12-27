import {WhyUs} from "@/widgets/mainpage/why-us";
import {MainFeatures} from "@/widgets/mainpage/main-features";
import {Banner} from "@/widgets/mainpage/banner";
import {Benefits} from "@/widgets/mainpage/benefits";
import {SubsPrice} from "@/widgets/mainpage/subs-price";
import {Hero} from "@/shared/ui/hero";

export default function Home() {
    return (
        <div className="flex gap-[70px] flex-col">
            <Hero banner="bg-main-banner" title="Enjoy your game" text="Manage your game"/>
            <div className="flex flex-col items-center mds:gap-[70px] gap-[25px]">
                <WhyUs/>
                <MainFeatures/>
                <Benefits/>
                <SubsPrice/>
                <Banner/>
            </div>
        </div>
    );
}
