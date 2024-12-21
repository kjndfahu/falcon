import {GoogleButton} from "@/features/auth/ui/google-button";


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
        </div>
    )
}