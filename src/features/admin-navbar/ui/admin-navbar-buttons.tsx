"use client";

import {ActivePoint} from "@/shared/ui/pc-icons";
import {useAdminNavbar} from "@/features/admin-navbar/model/useAdminNavbar";

export const    AdminNavbarButtons = () => {
    const { adminNavbarLinks, activeId, handleNavigation } = useAdminNavbar();

    return (
        <div className="flex w-[300px] flex-col gap-5">
            {adminNavbarLinks.map((item) => (
                <div key={item.id} onClick={() => handleNavigation(item.id, item.link)} className={`flex items-center py-[3px] gap-[26px] cursor-pointer ${activeId === item.id ? "bg-[linear-gradient(90deg,_rgba(23,_102,_255,_0)_0%,_rgba(23,_102,_255,_0.05)_18%,_rgba(23,_102,_255,_0.05)_83.5%,_rgba(23,_102,_255,_0)_100%)]" : "text-[#0057FF]"}`}>
                    {activeId === item.id ? (
                        <ActivePoint />
                    ) : (
                        <div className="w-[16px] h-[34px]"></div>
                    )}
                    <div className={`flex items-center gap-7 text-[18px] ${activeId === item.id ? "text-[#0057FF]" : "text-[#4B5167]" }`}>
                        {activeId === item.id ? (<>{item.logoActive}</>) : (<>{item.logoInactive}</>)}
                        <h3>{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};