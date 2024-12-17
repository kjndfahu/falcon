'use client'

import {ClosedEye, OpenEye} from "@/shared/ui/pc-icons";
import {useState} from "react";

export const SignUpFields = () => {
    const [passEye, setPassEye] = useState(false);
    const [passConfirmEye, setPassConfirmEye] = useState(false);

    return (
        <div className="flex flex-col gap-[20px] pt-[50px]">
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                Name
                <div
                    className="rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input placeholder="Enter your name"
                           className="bg-transparent w-full focus:outline-none focus:ring-0" type="text"/>
                </div>
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                Email
                <div
                    className="rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input placeholder="Enter your name"
                           className="bg-transparent w-full focus:outline-none focus:ring-0" type="text"/>
                </div>
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                Password
                <div className="flex items-center rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input placeholder="Enter your name"
                           className="bg-transparent w-full focus:outline-none focus:ring-0" type="text"/>
                    <div className="cursor-pointer" onClick={() => setPassEye(!passEye)}>
                        {passEye ? (
                            <OpenEye/>
                        ) : (
                            <ClosedEye/>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                Confirm Password
                <div
                    className="flex items-center rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input placeholder="Enter your name"
                           className="bg-transparent w-full focus:outline-none focus:ring-0" type="text"/>
                    <div className="cursor-pointer" onClick={() => setPassConfirmEye(!passConfirmEye)}>
                        {passConfirmEye ? (
                            <OpenEye/>
                        ) : (
                            <ClosedEye/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}