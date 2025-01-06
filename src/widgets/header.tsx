'use client'

import {LogoText} from "@/features/header/ui/logo-text";
import {ButtonsBlock} from "@/features/header/ui/buttons-block";
import {HeaderLinks} from "@/features/header/ui/header-links";
import {useState} from "react";

interface Props{
    isAuth: boolean;
}

export const Header:React.FC<Props> = ({isAuth}) => {
    const [isClicked, setClicked] = useState(false);
    return (
        <div className="flex w-full md:flex-row flex-col md:items-center justify-between md:py-[30px] xl:px-[210px] lg:px-[150px] mdbvp:px-[75px] md:px-[25px]">
            <LogoText isClicked={isClicked} setClicked={setClicked} />
            <div
                className={`md:flex ${isClicked ? 'flex' : 'hidden'} md:flex-row flex-col md:items-center md:gap-[50px] gap-[25px] md:py-0 py-[25px] md:px-0 px-[20px] `}>
                <HeaderLinks/>

            </div>
            <div className="md:flex hidden">
                <ButtonsBlock isAuth={isAuth}/>
            </div>
        </div>
    )
}