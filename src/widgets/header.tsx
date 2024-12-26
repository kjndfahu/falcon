import {LogoText} from "@/features/header/ui/logo-text";
import {ButtonsBlock} from "@/features/header/ui/buttons-block";
import {HeaderLinks} from "@/features/header/ui/header-links";

export const Header = () => {
    return (
        <div className="flex smbvp:flex-row flex-col smbvp:items-center justify-between py-[30px] xl:px-[210px] lg:px-[150px] mdbvp:px-[100px] md:px-[50px] smbvp:px-[25px]">
            <LogoText/>
            <HeaderLinks/>
            <ButtonsBlock/>
        </div>
    )
}