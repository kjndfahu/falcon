import {LogoBlock} from "@/features/main-navbar/ui/logo-block";
import {NavbarButtons} from "@/features/main-navbar/ui/navbar-buttons";

export const MainNavbar = () => {
    return (
        <div className="flex flex-col gap-[100px] w-[300px] min-h-screen border-r-[1px] border-[#CDDBEB] py-[77px] bg-white">
            <LogoBlock/>
            <NavbarButtons/>
        </div>
    )
}