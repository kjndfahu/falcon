import {useId} from "react";

interface Props{
    formData?: FormData;
    errors?: {
        email?: string;
        sum?: number;
        _errors?: string;
    }
    action?: (formData: FormData) => void;
}

export const DecrementBalanceForm: React.FC<Props> = ({formData, errors}) => {
    const sumId = useId();
    const emailId = useId();

    const formValues = formData ? {
        email: formData instanceof FormData ? formData.get("email") : '',
        sum: formData instanceof FormData ? formData.get("sum") : ''
    } : {
        email: '',
        sum: ''
    };

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
                        defaultValue={formValues.email?.toString()}
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
                {errors?.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <div className="flex flex-col text-[18px] gap-3">
                <label htmlFor={sumId}>Снять сумму</label>
                <div
                    className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        name="sum"
                        type="number"
                        placeholder="Enter sum"
                        required
                        defaultValue={formValues.sum?.toString()}
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
                {errors?.sum && <div className="text-red-500">{errors.sum}</div>}
            </div>
        </div>
    )
}