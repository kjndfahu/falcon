import { useState } from "react";

export const useAccordion = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return {
        openId,
        toggleAccordion,
        setOpenId
    };
};
