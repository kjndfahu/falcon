import {GoogleButton} from "@/features/auth/ui/google-button";
import Link from "next/link";


interface Props{
    fields?: React.ReactNode;
    titlebtn: string;
    maintitle:string;
    actions:React.ReactNode;
    errors: React.ReactNode,
    action?  : (formData: FormData) => void;
}

export const AuthFormLayout:React.FC<Props> = ({ actions, errors, action, fields, maintitle,}) => {
    return (
        <div className="flex flex-col w-full text-[#0A131D] text-[32px] font-semibold">
            <h3>{maintitle}</h3>
            <form action={action}>
                {fields}
                {errors}
                {actions}
            </form>
            <GoogleButton />
            <div className="flex sml:flex-row flex-col w-full sml:items-center items-start sml:gap-0 gap-3 justify-between sml:pt-[25px] pt-[50px] font-normal">
                <div className="flex text-[18px] gap-1 text-[#67748E]">Already have an account?
                    <Link href="/sign-in">
                        <span className="text-[#0A131D] underline">Sign Up</span>
                    </Link>
                </div>
                <p className="text-[18px] text-[#67748E]">Forgot your <span className="text-[#0A131D] underline">password</span></p>
            </div>
        </div>
    )
}