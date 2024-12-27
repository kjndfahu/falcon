import {Hero} from "@/shared/ui/hero";
import {QuestionBlock} from "@/widgets/faq/question-block";
import {AccordionBlock} from "@/widgets/faq/accordion-block";

export default function FaqPage() {
    return (
        <div className="flex flex-col mds:gap-[70px] gap-[25px]">
            <Hero banner="bg-faq-banner" title="Top questions" text="Need something cleared up? Here are our most frequently asked questions."/>
            <AccordionBlock/>
            <QuestionBlock/>
        </div>
    )
}