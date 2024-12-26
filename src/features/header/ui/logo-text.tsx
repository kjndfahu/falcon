import {MainLogo} from "@/shared/ui/icons";

export const LogoText = () => {
    return (
        <div className="flex items-center smbvp:bg-transparent smbvp:p-0 p-[20px] bg-[#1F2340] gap-3">
            <MainLogo/>
            <h3 className="smbvp:flex text-[18px]">Logo Time</h3>
        </div>
    )
}