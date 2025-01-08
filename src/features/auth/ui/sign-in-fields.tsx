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
        <div className="flex flex-col gap-[20px] sml:pt-[50px] pt-[30px]">
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={loginId}>Email or Username</label>
                <div className="rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        id={loginId}
                        name="login"
                        type="login"
                        placeholder="Enter your username or email"
                        defaultValue={formData?.get("login")?.toString()}
                        className="bg-transparent w-full focus:outline-none focus:ring-0" />
                </div>
                {errors?.login && <div className="text-red-500">{errors.login}</div>}
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={passwordId}>Password</label>
                <div
                    className="flex items-center rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input id={passwordId}
                           name="password"
                           type={passEye ? "text" : "password"}
                           placeholder="Enter your password"
                           required
                           defaultValue={formData?.get("password")?.toString()}
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
                {errors?.password && <div className="text-red-500">{errors.password}</div>}
            </div>

        </div>
    )
}