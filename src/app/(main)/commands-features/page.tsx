import {Hero} from "@/shared/ui/hero";
import {MainBanner} from "@/features/account-info/ui/main-banner";
import {QuestionsBlock} from "@/features/commands/ui/questions-block";
import {SearchInput} from "@/features/commands/ui/search-input";

export default function CommandsFeaturesPage() {
    return (
        <div className="flex flex-col gap-[70px]">
            <Hero banner="bg-contact-banner " title="Commands"/>
            <div className="flex flex-col px-[220px] gap-[70px]">
                <MainBanner styles="h-[450px]" bg="bg-[#0E1E5A]"/>
                <SearchInput/>
                <QuestionsBlock/>
            </div>
        </div>
    )
}