import {Hero} from "@/shared/ui/hero";
import {ImageBlock} from "@/features/commands-features/ui/image-block";
import {CommandList} from "@/features/commands-features/ui/command-list";

export default function CommandsFeaturesPage() {
    return (
        <div className="flex flex-col gap-[70px]">
            <Hero banner="bg-contact-banner " title="Commands"/>
            <div className="flex flex-col gap-[70px] px-[220px]">
                <ImageBlock/>
                <CommandList/>
            </div>
        </div>
    )
}