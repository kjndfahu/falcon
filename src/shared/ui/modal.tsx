'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {useEffect} from "react";

interface Props{
    title: string;
    isModal: boolean;
    setModal: (isModal:boolean) => void;
    child:React.ReactNode;
}

export const Modal:React.FC<Props> = ({title, setModal, isModal, child}) => {
    useEffect(() => {
        if (isModal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isModal]);

    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-[50px] p-[75px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]">
                <div className="flex w-full items-center justify-between text-[#0A131D] leading-[30px] font-semibold text-[32px]">
                    {title}
                    <div className="cursor-pointer" onClick={() => setModal(!isModal)} >
                        <XLogo/>
                    </div>
                </div>
                {child}
            </div>
        </div>
    );
};
