'use client'
import {LogoBlock} from "@/features/main-navbar/ui/logo-block";
import {AdminNavbarButtons} from "@/features/admin-navbar/ui/admin-navbar-buttons";
import {useState} from "react";

export const AdminNavbar = () => {
    const [isClicked, setClicked] = useState(false);
    return (
        <div className="flex flex-col gap-[100px] w-[300px] min-h-screen border-r-[1px] border-[#CDDBEB] py-[77px] bg-white">
            <LogoBlock isClicked={isClicked} setClicked={setClicked}/>
            <AdminNavbarButtons/>
        </div>
    )
}