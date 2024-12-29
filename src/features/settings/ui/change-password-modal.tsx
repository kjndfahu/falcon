'use client'

import {Button} from "@/shared/ui/button";
import {ClosedEye, OpenEye} from "@/shared/ui/pc-icons";
import {useState} from "react";

export const ChangePasswordModal = () => {
    const [passEye, setPassEye] = useState(false);
    const [confirmPassEye, setConfirmPassEye] = useState(false);

    return (
        <div className="flex flex-col text-[#0A131D] gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label>Password</label>
                <div
                    className="flex items-center rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input
                        name="password"
                        type={passEye ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"/>
                    <div className="cursor-pointer" onClick={() => setPassEye(!passEye)}>
                        {passEye ? (
                            <OpenEye/>
                        ) : (
                            <ClosedEye/>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-[18px] gap-3">
                <label>Confirm Password</label>
                <div
                    className="flex items-center rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input
                        name="confirmPassword"
                        type={confirmPassEye ? "text" : "password"}
                        placeholder="Enter your password"
                        className="bg-transparent w-full focus:outline-none focus:ring-0"/>
                    <div className="cursor-pointer" onClick={() => setConfirmPassEye(!confirmPassEye)}>
                        {confirmPassEye ? (
                            <OpenEye/>
                        ) : (
                            <ClosedEye/>
                        )}
                    </div>
                </div>
            </div>
            <Button title="Next" styles="items-center justify-center py-[18px] rounded-[15px] text-white bg-[#0A131D]"/>
        </div>

    )
}