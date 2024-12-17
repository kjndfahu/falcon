import {SignInFields} from "@/features/auth/ui/sign-in-fields";
import {AuthFormLayout} from "@/features/auth/ui/auth-form-layout";

export function SignInForm(){
    return (
        <AuthFormLayout maintitle="Welcome back" titlebtn="Log in" signupfields={ <SignInFields/> }/>
    )
}