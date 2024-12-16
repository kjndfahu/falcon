import {WhyUs} from "@/widgets/mainpage/why-us";
import {MainFeatures} from "@/widgets/mainpage/main-features";
import {Banner} from "@/widgets/mainpage/banner";
import {Benefits} from "@/widgets/mainpage/benefits";
import {SubsPrice} from "@/widgets/mainpage/subs-price";

export default function Home() {
  return (
    <div className="flex items-center gap-[70px] flex-col">
      <WhyUs/>
        <MainFeatures/>
      <Benefits/>
        <SubsPrice/>
        <Banner/>
    </div>
  );
}
