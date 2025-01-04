import {SearchBlock} from "@/features/commands-features/ui/search-block";
import {CommandsAccordion} from "@/features/commands-features/ui/commands-accordion";

export const CommandList = () => {
    return (
        <div className="flex flex-col gap-[25px]">
            <SearchBlock/>
            <CommandsAccordion/>
        </div>
    )
}