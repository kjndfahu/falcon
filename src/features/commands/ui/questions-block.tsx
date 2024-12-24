'use client'

import {useAccordion} from "@/features/faq/model/useAccordion";
import {questionsData} from "@/features/commands/model/constants";
import {QuestionsAccordion} from "@/features/commands/ui/questions-accordion";

export const QuestionsBlock = () => {
    const { openId, toggleAccordion } = useAccordion();

    return (
        <QuestionsAccordion data={questionsData} openId={openId} toggleAccordion={toggleAccordion} />
    )
}