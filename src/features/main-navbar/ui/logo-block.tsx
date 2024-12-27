import {AccountLogo} from "@/shared/ui/icons";
import {AlignJustify, X} from "lucide-react";

export const LogoBlock = ({isClicked, setClicked}: {isClicked: boolean, setClicked: (isClicked: boolean) => void}) => {
    return (
        <div
            className="flex items-center justify-between md:bg-transparent bg-[#1F2340] px-[42px] text-[18px] md:py-0 py-[30px] font-semibold md:text-[#101D2C] leading-[23px]">
            <div className="flex items-center gap-3">
                <AccountLogo/>
                Logo Time
            </div>
            <div
                onClick={() => setClicked(!isClicked)}
                className="md:hidden flex items-center justify-center cursor-pointer border-[1px] border-white rounded-[5px] w-[36px] h-[36px]"
            >
                {isClicked ? (
                    <X color="#ffffff"/>
                ) : (
                    <AlignJustify color="#ffffff"/>
                )}
            </div>
        </div>
    )
}