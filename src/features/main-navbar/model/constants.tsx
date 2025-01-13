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
import {BookUser, ChartNoAxesCombined, Gauge, UserCog} from "lucide-react";


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
    {
        id: 6,
        title: 'Admin Users',
        link: '/admin-users',
        logoInactive: <UserCog color="#4b5167" /> ,
        logoActive: <UserCog color="#0067FF" />,
    },
    {
        id: 7,
        title: 'Dashboard',
        link: '/dashboard',
        logoInactive: <Gauge color="#4b5167" />,
        logoActive: <Gauge color="#0067FF" />,
    },
    {
        id: 8,
        title: 'Statistics',
        link: '/statistics',
        logoInactive: <ChartNoAxesCombined color="#4b5167" />,
        logoActive: <ChartNoAxesCombined color="#0067FF" />,
    },
    {
        id: 9,
        title: 'Admin Purchases',
        link: '/admin-purchase-history',
        logoInactive: <BookUser  color="#4b5167" />,
        logoActive: <BookUser color="#0067FF" />,
    },
];