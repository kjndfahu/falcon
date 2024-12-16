'use client'

import Accordion from "@/features/faq/ui/accordion";
import {faqData} from "@/features/faq/model/constants";
import {useAccordion} from "@/features/faq/model/useAccordion";

export const AccordionBlock = () => {
    const { openId, toggleAccordion } = useAccordion();

    return (
        <Accordion data={faqData} openId={openId} toggleAccordion={toggleAccordion} />
    )
}