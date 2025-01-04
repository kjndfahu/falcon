import localFont from "next/font/local";
import "../globals.css";
import {AdminNavbar} from "@/widgets/admin-navbar/admin-navbar";
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

export default async function AdminLayout({children}: {children: React.ReactNode}){
    // const {session} = await sessionService.verifySession()
    // console.log(session)
    return (
        <html lang="en">
        <body className={`${myFont.className} bg-white antialiased`}>
        <div className="flex md:flex-row flex-col">
            <AdminNavbar/>
            <div className="md:ml-[300px] flex-1">
                <Toaster/>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}