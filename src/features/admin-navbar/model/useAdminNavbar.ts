"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {adminNavbarLinks} from "@/features/admin-navbar/model/constants";


export const useAdminNavbar = () => {
    const [activeId, setActiveId] = useState<number | null>(1);
    const router = useRouter();

    const handleNavigation = (id: number, link: string) => {
        setActiveId(id);
        router.push(link);
    };

    return {
        adminNavbarLinks,
        activeId,
        handleNavigation,
    };
};
