import {useId} from "react";

interface Props{
    formData?: FormData;
    errors?: {
        email?:string;
        sum?:number;
        _errors?: string;
    }
    action?: (formData: FormData) => void;
}

export const BlockUserInput:React.FC<Props> = ({formData, errors}) => {
    const emailId = useId();
    return (
        <div className="flex flex-col w-full text-[#0A131D] gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label htmlFor={emailId}>Email</label>
                <div className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
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
        </div>
    )
}