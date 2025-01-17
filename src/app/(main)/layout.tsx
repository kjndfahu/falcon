import "../globals.css";
import {Header} from "@/widgets/header";
import localFont from "next/font/local";
import {Footer} from "@/widgets/footer";
import {sessionService} from "@/enteties/user/services/session";
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


export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const { isAuth } = await sessionService.checkSession();

    return (
        <html lang="en">
        <body
            className={`${myFont.className} bg-white antialiased`}
        >
        <Header isAuth={isAuth} />
        {children}
        <Footer/>
        <Toaster/>
        </body>
        </html>
    );
}
