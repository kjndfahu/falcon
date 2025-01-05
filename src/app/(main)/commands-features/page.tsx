import {Hero} from "@/shared/ui/hero";
import {ImageBlock} from "@/features/commands-features/ui/image-block";
import {CommandList} from "@/features/commands-features/ui/command-list";

export default function CommandsFeaturesPage() {
    return (
        <div className="flex flex-col sml:gap-[70px] gap-[25px]">
            <Hero banner="bg-commands-banner " title="Commands"/>
            <div className="flex flex-col sml:gap-[70px] gap-[25px] xl:px-[220px] lg:px-[150px] md:px-[100px] sml:px-[50px] px-[20px]">
                <ImageBlock/>
                <CommandList/>
            </div>
        </div>
    )
}