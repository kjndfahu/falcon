import {MainNavbar} from "@/widgets/main-navbar/main-navbar";
import localFont from "next/font/local";
import "../globals.css";
import {Providers} from "./providers";
import {sessionService} from "@/enteties/user/services/session";
import {getUserInfo} from "@/features/account-info/model/get-user";
import {BlockedUser} from "@/features/account-info/ui/blocked-user";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import type {Metadata} from "next";

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


export default async function LK({children}: {children: React.ReactNode}){
    const {session} = await sessionService.verifySession()
    const user = await getUserInfo({login: session.login})
    if(!user){
        throw new Error("User not found.");
    }
    
    const role = user.role
    const cookieStore = await cookies()
    const isVerified = cookieStore.has('verified') && cookieStore.get('verified')?.value === 'true'

    if (user.login === 'admin' && !isVerified) {
        return redirect('/mail-verification')
    }

    return (
        <div className={myFont.className + " bg-white antialiased"}>
            {user.isBlocked === false ? (
                <Providers>
                    <div className="flex md:flex-row flex-col w-full min-h-screen">
                        <MainNavbar role={role}/>
                        <div className="md:ml-[300px] flex-1">
                            {children}
                        </div>
                    </div>
                </Providers>
            ) : (
                <BlockedUser/>
            )}
        </div>
    );
}