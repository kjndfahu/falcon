'use client'
import {TermsActive, TermsInactive} from "@/shared/ui/icons";
import {useState} from "react";

interface Props {
    onChange?: (accepted: boolean) => void;
}

export const Terms: React.FC<Props> = ({ onChange }) => {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        const newValue = !isClicked;
        setClicked(newValue);
        onChange?.(newValue);
    };

    return (
        <div className="flex items-center text-[18px] font-normal pt-[18px] text-[#101D2C] gap-3">
            <div 
                onClick={handleClick} 
                className={`border-[1px] cursor-pointer ${
                    isClicked ? 'border-[#20E927]' : 'border-[#DBDBDB]'
                } rounded-[12px] p-[9px]`}
            >
                {isClicked ? <TermsActive/> : <TermsInactive/>}
            </div>
            I accepted all terms & conditions.
        </div>
    );
};