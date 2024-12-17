import {sessionService} from "@/enteties/user/services/session";
import {MainNavbar} from "@/widgets/main-navbar/main-navbar";
import localFont from "next/font/local";
import "../globals.css";

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
    // const {session} = await sessionService.verifySession()
    // console.log(session)
    return (
        <html lang="en">
        <body className={`${myFont.className} bg-white antialiased`}>
        <div className="flex">
            <MainNavbar/>
            {children}
        </div>
        </body>
        </html>
    )
}