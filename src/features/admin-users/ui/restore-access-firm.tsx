'use client'
import {useId, useState} from "react";
import {ClosedEye, OpenEye} from "@/shared/ui/pc-icons";

interface Props{
    formData?: FormData;
    errors?: {
        email?:string;
        password?:number;
        _errors?: string;
    }
    action?: (formData: FormData) => void;
}

export const RestoreAccessForm:React.FC<Props> = ({formData, errors}) => {
    const[passEye, setPassEye] = useState(false);
    const passwordId = useId();
    const emailId = useId();
    return (
        <div className="flex flex-col w-full text-[#0A131D] gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label htmlFor={emailId}>Email</label>
                <div
                    className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required
                        defaultValue={formData?.get("email")?.toString()}
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
                {errors?.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <div className="flex flex-col font-medium text-[18px] leading-[17px] text-[#0A131D] gap-3">
                <label htmlFor={passwordId}>Password</label>
                <div
                    className="flex items-center rounded-[15px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] pl-[16px] py-[18px] pr-[31px]">
                    <input id={passwordId}
                           name="password"
                           type="password"
                           placeholder="Enter your password"
                           required
                           defaultValue={formData?.get("password")?.toString()}
                           className="bg-transparent w-full focus:outline-none focus:ring-0"/>
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