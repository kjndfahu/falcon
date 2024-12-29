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
                <label>New Password</label>
                <div
                    className="flex justify-between rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter new password"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
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
                <label>Confirm New Password</label>
                <div
                    className="flex justify-between rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        name="confirm-password"
                        type="password"
                        placeholder="Confirm New Password"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
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