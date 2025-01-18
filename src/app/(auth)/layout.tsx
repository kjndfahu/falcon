import {AuthBanner} from "@/widgets/auth-banner";
import localFont from "next/font/local";
import "../globals.css";
import {NextAuthProvider} from "@/providers/next-auth-provider";
import {sessionService} from "@/enteties/user/services/session";
import {redirect} from "next/navigation";

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


export default async function AuthLayout({children}: {children: React.ReactNode}){
    const session = await sessionService.checkSession()
    if(session.isAuth){
        redirect("/personal-cabinet")
    }
    return (
        <html lang="en">
        <body className={`${myFont.className} bg-white antialiased`}>
        <div className="flex md:flex-row flex-col-reverse w-[100vw] md:p-0 p-5 md:justify-between justify-center md:gap-0 sm:gap-[50px] gap-[20px] items-center md:min-h-screen">
            <NextAuthProvider>
                {children}
                <AuthBanner/>
            </NextAuthProvider>
        </div>
        </body>
        </html>
    )
}