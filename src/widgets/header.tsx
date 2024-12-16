import {LogoText} from "@/features/header/ui/logo-text";
import {ButtonsBlock} from "@/features/header/ui/buttons-block";
import {HeaderLinks} from "@/features/header/ui/header-links";

export const Header = () => {
    return (
        <div className="flex items-center justify-between py-[30px] px-[210px]">
            <LogoText/>
            <HeaderLinks/>
            <ButtonsBlock/>
        </div>
    )
}