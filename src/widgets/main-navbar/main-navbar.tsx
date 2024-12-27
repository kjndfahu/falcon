'use client'
import {LogoBlock} from "@/features/main-navbar/ui/logo-block";
import {NavbarButtons} from "@/features/main-navbar/ui/navbar-buttons";
import {useState} from "react";

export const MainNavbar = () => {
    const [isClicked, setClicked] = useState(false);
    return (
        <div className="md:fixed flex flex-col md:gap-[100px] gap-[18px] md:w-[300px] w-full md:min-h-screen border-r-[1px] border-[#CDDBEB] md:py-[77px] bg-white">
            <LogoBlock isClicked={isClicked} setClicked={setClicked} />
            {/*{isClicked ? (*/}
            {/*    <NavbarButtons/>*/}
            {/*) : ('')}*/}

            <NavbarButtons/>
        </div>
    )
}