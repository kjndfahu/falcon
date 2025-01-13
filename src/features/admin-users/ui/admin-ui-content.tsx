'use client'
import {VerificationWrapper} from "@/features/auth/ui/verefication-wrapper";
import {Toaster} from "react-hot-toast";
import {MainNavbar} from "@/widgets/main-navbar/main-navbar";
import {useEffect, useState} from "react";

export const AdminLayoutContent = ({ role, children }) => {
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => { const isAdminVerified = localStorage.getItem("isAdminVerified") === "true";
        setIsVerified(isAdminVerified); }, []);
    return (
        <div className="flex md:flex-row flex-col">
            <MainNavbar role={role} />
            <div className="md:ml-[300px] flex-1">
                <Toaster />
                {!isVerified ? ( <VerificationWrapper email="ccursor6@gmail.com" /> )
                    :
                    ( children )}
            </div>
        </div>
    );

}