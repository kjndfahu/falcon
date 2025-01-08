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

export const AddBalanceForm:React.FC<Props> = ({formData, errors}) => {
    const sumId = useId();
    const emailId = useId();
    return (
        <div className="flex flex-col w-full text-[#0A131D] gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label htmlFor={emailId}>Email</label>
                <div className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        id={emailId}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required
                        defaultValue={formData?.get("email")?.toString()}
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
                {(errors?.email || errors?._errors) && (
                    <div className="text-red-500 text-sm">
                        {errors.email || errors._errors}
                    </div>
                )}
            </div>
            <div className="flex flex-col text-[18px] gap-3">
                <label htmlFor={sumId}>Сумма</label>
                <div
                    className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        id={sumId}
                        name="sum"
                        type="number"
                        placeholder="Enter sum"
                        required
                        defaultValue={Number(formData?.get("sum") || 0)}
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
                {errors?.sum && (
                    <div className="text-red-500 text-sm">{errors.sum}</div>
                )}
            </div>
        </div>
    )
}