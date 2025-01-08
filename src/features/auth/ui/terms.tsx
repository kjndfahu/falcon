import {TermsActive, TermsInactive} from "@/shared/ui/icons";
import {useState} from "react";

export const Terms = () => {
    const [isClicked, setClicked] = useState(false);
    return (
        <div className="flex items-center text-[18px] font-normal pt-[18px] text-[#101D2C] gap-3">
            <div onClick={() => setClicked(!isClicked)} className={`border-[1px] cursor-pointer ${isClicked ? 'border-[#20E927]' : 'border-[#DBDBDB]'} rounded-[12px] p-[9px]`}>
                {isClicked ? (
                    <TermsActive/>
                ) : (
                    <TermsInactive/>
                )}
            </div>
            I accepted all tearms & conditions.
        </div>
    )
}