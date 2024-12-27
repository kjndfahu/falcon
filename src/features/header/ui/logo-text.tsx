import {MainLogo} from "@/shared/ui/icons";
import {AlignJustify, X} from "lucide-react";

interface Props {
    isClicked: boolean;
    setClicked: (isClicked: boolean) => void;
}

export const LogoText:React.FC<Props> = ({isClicked, setClicked}) => {
    return (
        <div
            className="flex items-center justify-between md:py-0 py-[22px] md:px-0 px-[50px] md:bg-transparent bg-[#1F2340] gap-3">
            <MainLogo/>
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