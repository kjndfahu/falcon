import {PrBlock} from "@/shared/ui/pr-block";
import {LevelBlock} from "@/features/premium-block/ui/level-block";

export const PremiumBlock = () => {
    return (
        <div className="flex items-center gap-[50px]">
            <PrBlock child={ <LevelBlock/> } />
        </div>
    )
}