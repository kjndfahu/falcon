"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {navbarLinks} from "@/features/main-navbar/model/constants";


export const useNavbar = () => {
    const [activeId, setActiveId] = useState<number | null>(1);
    const router = useRouter();

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
