'use client'
import {LogoBlock} from "@/features/main-navbar/ui/logo-block";
import {AdminNavbarButtons} from "@/features/admin-navbar/ui/admin-navbar-buttons";
import {useState} from "react";

export const AdminNavbar = () => {
    const [isClicked, setClicked] = useState(false);
    return (
        <div className="md:fixed flex flex-col md:gap-[100px] gap-[18px] md:w-[300px] w-full md:min-h-screen border-r-[1px] border-[#CDDBEB] md:py-[77px] bg-white">
            <LogoBlock isClicked={isClicked} setClicked={setClicked}/>
            <AdminNavbarButtons/>
        </div>
    )
}