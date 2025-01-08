import {Texts} from "@/shared/ui/texts";
import {MainFeaturesBlocks} from "@/features/account-info/ui/main-features-blocks";

export const MainFeatures = () => {
    return (
        <div id="features-section" className="flex flex-col mds:gap-[50px] gap-[25px] w-full items-center text-center xxl:px-[220px] xl:px-[100px] mds:px-[40px] px-[20px]">
            <Texts title="Main Features" text="Everything you need, all in one bot" />
            <MainFeaturesBlocks/>
        </div>
    )
}