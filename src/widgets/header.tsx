'use client'

import {LogoText} from "@/features/header/ui/logo-text";
import {ButtonsBlock} from "@/features/header/ui/buttons-block";
import {HeaderLinks} from "@/features/header/ui/header-links";
import {useState} from "react";

export const Header = () => {
    const [isClicked, setClicked] = useState(false);
    return (
        <div className="flex md:flex-row flex-col md:items-center justify-between md:py-[30px] xl:px-[210px] lg:px-[150px] mdbvp:px-[75px] md:px-[25px]">
            <LogoText isClicked={isClicked} setClicked={setClicked} />
                    <>
                        <HeaderLinks/>
                        <ButtonsBlock/>
                    </>
        </div>
    )
}