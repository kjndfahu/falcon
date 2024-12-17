import {SignInForm} from "@/features/auth/containers/sign-in-form";

export default async function SignInPage(){
    return (
        <div className="flex px-[248px] items-center justify-center min-h-screen">
            <SignInForm/>
        </div>
    )
}