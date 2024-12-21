'use client'

import {ClosedEye, OpenEye} from "@/shared/ui/pc-icons";
import {useId, useState} from "react";

interface Props {
    formData?:FormData,
    errors?: {
        login?: string,
        email?:string;
        password?: string,
        confirmPassword?:string
    }
    action?: (formData: FormData) => void;
}

export const SignInFields:React.FC<Props> = ({formData, errors}) => {
    const [passEye, setPassEye] = useState(false);

    const loginId = useId();
    const passwordId = useId();

    return (
        <div className="flex flex-col gap-[20px] pt-[50px]">
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={loginId}>Email or Username</label>
                <div
                    className="rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        id={loginId}
                        name="login"
                        type="login"
                        placeholder="Enter your username or email"
                        defaultValue={formData?.get("login")?.toString()}
                        className="bg-transparent w-full focus:outline-none focus:ring-0" />
                    {errors?.login && <div>{errors.login}</div>}
                </div>
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={passwordId}>Password</label>
                <div
                    className="flex items-center rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input placeholder="Enter your name"
                           id={passwordId}
                           name="password"
                           type="password"
                           defaultValue={formData?.get("password")?.toString()}
                           className="bg-transparent w-full focus:outline-none focus:ring-0" />
                    <div className="cursor-pointer" onClick={() => setPassEye(!passEye)}>
                        {passEye ? (
                            <OpenEye/>
                        ) : (
                            <ClosedEye/>
                        )}
                    </div>
                    {errors?.password && <div>{errors.password}</div>}
                </div>
            </div>

        </div>
    )
}