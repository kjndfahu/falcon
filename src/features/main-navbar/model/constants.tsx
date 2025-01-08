import {ReactNode} from "react";
import {
    HistoryActive,
    HistoryInactive,
    MainLogoActive,
    MainLogoInactive, ReferralActive, ReferralInactive, SettingActive,
    SettingInactive,
    SubsActive,
    SubsInactive
} from "@/shared/ui/pc-icons";


export interface NavbarLink {
    id: number;
    title: string;
    link: string;
    logoInactive: ReactNode;
    logoActive: ReactNode;
}

export const navbarLinks: NavbarLink[] = [
    {
        id: 1,
        title: "Main",
        link: "/personal-cabinet",
        logoInactive: <MainLogoInactive className="w-[27px] h-[27px]" />,
        logoActive: <MainLogoActive className="w-[27px] h-[27px]" />,
    },
    {
        id: 2,
        title: "Active Subscriptions",
        link: "/active-subscriptions",
        logoInactive: <SubsInactive className="w-[27px] h-[27px]" />,
        logoActive: <SubsActive className="w-[27px] h-[27px]" />,
    },
    {
        id: 3,
        title: "Settings",
        link: "/settings",
        logoInactive: <SettingInactive className="w-[27px] h-[27px]" />,
        logoActive: <SettingActive className="w-[27px] h-[27px]" />,
    },
    {
        id: 4,
        title: "Purchase History",
        link: "/purchase-history",
        logoInactive: <HistoryInactive className="w-[27px] h-[27px]" />,
        logoActive: <HistoryActive className="w-[27px] h-[27px]" />,
    },
    {
        id: 5,
        title: "Referral",
        link: "/referral",
        logoInactive: <ReferralInactive className="w-[27px] h-[27px]" />,
        logoActive: <ReferralActive className="w-[27px] h-[27px]" />,
    },
];