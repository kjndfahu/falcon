import localFont from "next/font/local";
import "../globals.css";
import {Toaster} from "react-hot-toast";
import {sessionService} from "@/enteties/user/services/session";
import {getUserInfo} from "@/features/account-info/model/get-user";
import {MainNavbar} from "@/widgets/main-navbar/main-navbar";
import {VerificationWrapper} from "@/features/auth/ui/verefication-wrapper";
import ClientOnly from "@/features/auth/ui/client-only";
import {ReactNode} from "react";
import {AdminLayoutContent} from "@/features/admin-users/ui/admin-ui-content";


const myFont = localFont({
    src: [
        {
            path: "../../../src/shared/assets/fonts/SFPRODISPLAYREGULAR.woff",
            weight: '400',
            style: 'normal',
        },
        {
            path: "../../../src/shared/assets/fonts/SFPRODISPLAYMEDIUM.woff",
            weight: '500',
            style: 'italic',
        },
        {
            path: "../../../src/shared/assets/fonts/SFPRODISPLAYBOLD.woff",
            weight: '700',
            style: 'normal',
        },
    ],
});

export default async function AdminLayout({children}: { children: React.ReactNode }) {
    const {session} = await sessionService.verifySession();
    const user = await getUserInfo({login: session.login});

    if (!user) {
        throw new Error("User not found.");
    }

    const role = user.role;
    const isVerified = typeof window !== "undefined" && localStorage.getItem("isAdminVerified") === "true";

    console.log(isVerified);

    return (
        <html lang="en" className={`${myFont.className} bg-white antialiased`}>
        <body> {role === 'ADMIN' && (
            <ClientOnly>
                <AdminLayoutContent role={role}>
                {children}
            </AdminLayoutContent>
            </ClientOnly>
        )}
        </body>
        </html>
    );
}
