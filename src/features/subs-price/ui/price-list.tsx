'use client';

import { PriceBlock } from "./price-block";
import { DaysBlock } from "./days-block";
import { useState } from "react";

export const PriceList = () => {
    const [activeDays, setActiveDays] = useState('30');

    return (
        <div className="flex flex-col items-center gap-[50px]">
            <DaysBlock activeDays={activeDays} setActiveDays={setActiveDays} />
            <div className="flex gap-[25px]">
                <PriceBlock activeDays={activeDays} />
            </div>
        </div>
    );
}; 