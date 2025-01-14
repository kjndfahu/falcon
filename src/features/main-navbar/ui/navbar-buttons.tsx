"use client";

import { useNavbar } from "@/features/main-navbar/model/useNavbar";
import { ActivePoint } from "@/shared/ui/pc-icons";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { handleLogout } from "@/features/header/model/handle-logout";

interface Props {
    role: string;
}

export const NavbarButtons: React.FC<Props> = ({ role }) => {
    const { navbarLinks, activeId, handleNavigation } = useNavbar();

    const filteredLinks = navbarLinks.filter((item) => {
        if (role === "ADMIN") return true;
        if (role === "INFLUENCER") return item.id <= 5;
        return item.id <= 4;
    });

    return (
        <div className="flex md:w-[300px] w-full flex-col gap-5">
            {filteredLinks.map((item) => (
                <div
                    key={item.id}
                    onClick={() => handleNavigation(item.id, item.link)}
                    className={`flex items-center py-[3px] gap-[26px] cursor-pointer ${
                        activeId === item.id
                            ? "bg-[linear-gradient(90deg,_rgba(23,_102,_255,_0)_0%,_rgba(23,_102,_255,_0.05)_18%,_rgba(23,_102,_255,_0.05)_83.5%,_rgba(23,_102,_255,_0)_100%)]"
                            : "text-[#0057FF]"
                    }`}
                >
                    {activeId === item.id ? (
                        <ActivePoint />
                    ) : (
                        <div className="w-[16px] h-[34px]"></div>
                    )}
                    <div
                        className={`flex items-center gap-7 text-[18px] ${
                            activeId === item.id
                                ? "text-[#0057FF]"
                                : "text-[#4B5167]"
                        }`}
                    >
                        {activeId === item.id ? (
                            <>{item.logoActive}</>
                        ) : (
                            <>{item.logoInactive}</>
                        )}
                        <h3>{item.title}</h3>
                    </div>
                </div>
            ))}
            <div className="flex flex-col w-full gap-[20px] mt-[25px] px-[20px]">
                <div className="w-full">
                    <Button
                        onClick={handleLogout}
                        title="Log Out"
                        styles="bg-black w-full leading-[20px] py-[15px] md:rounded-[5px] rounded-[12px] cursor-pointer"
                    />
                </div>
                <div className="w-full">
                    <Link href="/">
                        <Button
                            title="Back to the main page"
                            styles="bg-[#0057FF] w-full leading-[20px] py-[15px] md:rounded-[5px] rounded-[12px]"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};
