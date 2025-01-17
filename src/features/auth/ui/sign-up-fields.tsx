'use client'

import {ClosedEye, OpenEye} from "@/shared/ui/pc-icons";
import {useId, useState} from "react";

interface Props {
    formData?:FormData,
    errors?: {
        login?: string,
        email?:string;
        password?: string,
        confirmPassword?:string,
        _errors?: string
    }
    action?: (formData: FormData) => void;
}

export const SignUpFields:React.FC<Props> = ({formData, errors}) => {
    const [passEye, setPassEye] = useState(false);
    const [passConfirmEye, setPassConfirmEye] = useState(false);

    const loginId = useId();
    const emailId = useId();
    const passwordId = useId();
    const confirmPasswordId = useId();

    return (
        <div className="flex flex-col gap-[20px] sml:pt-[50px] pt-[30px]">
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={loginId}>Username</label>
                <div className="rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input id={loginId}
                           name="login"
                           type="login"
                           placeholder="Enter your username"
                           required
                           defaultValue={formData?.get("login")?.toString()}
                           className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
                {errors?.login && <div className="text-red-500">{errors.login}</div>}
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={emailId}>Email</label>
                <div className="rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input id={emailId}
                           name="email"
                           type="email"
                           required
                           defaultValue={formData?.get("email")?.toString()}
                           placeholder="Enter your email"
                           className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
                {errors?.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={passwordId}>Password</label>
                <div className="flex items-center rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input id={passwordId}
                           name="password"
                           type={passEye ? "text" : "password"}
                           placeholder="Enter your password"
                           required
                           defaultValue={formData?.get("password")?.toString()}
                           className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                    <div className="cursor-pointer" onClick={() => setPassEye(!passEye)}>
                        {passEye ? <OpenEye/> : <ClosedEye/>}
                    </div>
                </div>
                {errors?.password && <div className="text-red-500">{errors.password}</div>}
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={confirmPasswordId}>Confirm Password</label>
                <div className="flex items-center rounded-[15px] sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input id={confirmPasswordId}
                           name="confirmPassword"
                           type={passConfirmEye ? "text" : "password"}
                           placeholder="Enter your password"
                           required
                           defaultValue={formData?.get("confirmPassword")?.toString()}
                           className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                    <div className="cursor-pointer" onClick={() => setPassConfirmEye(!passConfirmEye)}>
                        {passConfirmEye ? <OpenEye/> : <ClosedEye/>}
                    </div>
                </div>
                {errors?.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
            </div>
        </div>
    )
}