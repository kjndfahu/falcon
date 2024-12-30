import {Texts} from "@/shared/ui/texts";
import {MainFeaturesBlocks} from "@/features/account-info/ui/main-features-blocks";

export const MainFeatures = () => {
    return (
        <div className="flex flex-col gap-[50px] w-full items-center text-center px-[220px]">
            <Texts title="Main Features" text="Everything you need, all in one bot" />
            <MainFeaturesBlocks/>
        </div>
    )
}