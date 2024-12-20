"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { navbarLinks } from "@/features/main-navbar/model/constants";

export const useNavbar = () => {
    const [activeId, setActiveId] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        const currentPath = window.location.pathname;
        const activeLink = navbarLinks.find((link) => link.link === currentPath);

        if (activeLink) {
            setActiveId(activeLink.id);
        }
    }, []);

    const handleNavigation = (id: number, link: string) => {
        setActiveId(id);
        router.push(link);
    };

    return {
        navbarLinks,
        activeId,
        handleNavigation,
    };
};
