import { SearchBlock } from "@/features/commands-features/ui/search-block";
import { CommandsAccordion } from "@/features/commands-features/ui/commands-accordion";
import { CommandsProvider } from "../model/commands-context";

export const CommandList = () => {
    return (
        <CommandsProvider>
            <div className="flex flex-col gap-[25px]">
                <SearchBlock/>
                <CommandsAccordion/>
            </div>
        </CommandsProvider>
    );
};