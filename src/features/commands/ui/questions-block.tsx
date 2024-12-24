'use client'

import Accordion from "@/features/faq/ui/accordion";
import {useAccordion} from "@/features/faq/model/useAccordion";
import {questionsData} from "@/features/commands/model/constants";

export const QuestionsBlock = () => {
    const { openId, toggleAccordion } = useAccordion();

    return (
        <Accordion data={questionsData} openId={openId} toggleAccordion={toggleAccordion} />
    )
}