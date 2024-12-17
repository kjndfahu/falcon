import {SignUpForm} from "@/features/auth/containers/sign-up-form";

export default async function SignUpPage(){
    return (
        <div className="flex px-[248px] items-center justify-center min-h-screen">
            <SignUpForm/>
        </div>
    )
}