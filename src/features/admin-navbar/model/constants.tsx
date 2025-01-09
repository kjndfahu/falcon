import {ReactNode} from "react";
import {ChartNoAxesCombined, Gauge, UserCog} from "lucide-react";


export interface NavbarLink {
    id: number;
    title: string;
    link: string;
    logoInactive: ReactNode;
    logoActive: ReactNode;
}

export const adminNavbarLinks: NavbarLink[] = [
    {
        id: 1,
        title: 'Admin Users',
        link: '/admin-users',
        logoInactive: <UserCog color="#4b5167" /> ,
        logoActive: <UserCog color="#0067FF" />,
    },
    {
        id: 2,
        title: 'Dashboard',
        link: '/dashboard',
        logoInactive: <Gauge color="#4b5167" />,
        logoActive: <Gauge color="#0067FF" />,
    },
    {
        id: 3,
        title: 'Statistics',
        link: '/statistics',
        logoInactive: <ChartNoAxesCombined color="#4b5167" />,
        logoActive: <ChartNoAxesCombined color="#0067FF" />,
    }
]