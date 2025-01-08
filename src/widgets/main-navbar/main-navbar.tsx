'use client'

import { LogoBlock } from "@/features/main-navbar/ui/logo-block";
import { NavbarButtons } from "@/features/main-navbar/ui/navbar-buttons";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOutAction } from "@/features/auth/actions/sign-out";

interface Props{
    role: string;
}

export const MainNavbar:React.FC<Props> = ({role}) => {
    const [isClicked, setClicked] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const result = await signOutAction();

            if (result.success) {
                await signOut({ redirect: false });

                if (typeof window !== 'undefined') {
                    localStorage.clear();
                    sessionStorage.clear();
                }

                router.push(result.redirectUrl || '/');
            } else {
                console.error('Logout failed:', result.error);
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    };
    
    return (
        <div className="md:fixed flex flex-col md:gap-[100px] gap-[18px] md:w-[300px] w-full md:min-h-screen border-r-[1px] border-[#CDDBEB] md:py-[77px] bg-white">
            <LogoBlock isClicked={isClicked} setClicked={setClicked} />
            <div className={`md:flex ${isClicked ? 'flex' : 'hidden'} flex-col`}>
                <NavbarButtons role={role}/>
                <div className="md:hidden flex flex-col gap-[20px] mt-[25px] px-[20px]">
                    <div className="w-full">
                        <Button 
                            onClick={handleLogout}
                            title="Log Out"
                            styles="bg-black md:w-[150px] w-full leading-[20px] py-[15px] md:rounded-[5px] rounded-[12px] cursor-pointer"
                        />
                    </div>
                    <div className="w-full">
                        <Link href="/">
                            <Button 
                                title="Back to the main page"
                                styles="bg-[#0057FF] md:w-[150px] w-full leading-[20px] py-[15px] md:rounded-[5px] rounded-[12px]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};