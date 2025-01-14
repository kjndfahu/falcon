import localFont from "next/font/local";
import "../globals.css";
import {sessionService} from "@/enteties/user/services/session";
import {getUserInfo} from "@/features/account-info/model/get-user";
import {MainNavbar} from "@/widgets/main-navbar/main-navbar";
import {Toaster} from "react-hot-toast";


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

    return (
        <html lang="en" className={`${myFont.className} bg-white antialiased`}>
        <body>
        {role === 'ADMIN' && (
            <div className="flex md:flex-row flex-col">
                <MainNavbar role={role}/>
                <div className="md:ml-[300px] flex-1">
                    <Toaster/>
                    {children}
                </div>
            </div>
        )}
        </body>
        </html>
    );
}
