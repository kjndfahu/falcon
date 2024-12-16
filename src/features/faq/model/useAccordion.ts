import { useState } from "react";

export const useAccordion = (initialState: number | null = null) => {
    const [openId, setOpenId] = useState<number | null>(initialState);

    const toggleAccordion = (id: number) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    };

    return { openId, toggleAccordion };
};
