import {AuthFormLayout} from "@/features/auth/ui/auth-form-layout";
import {SignUpFields} from "@/features/auth/ui/sign-up-fields";

export function SignUpForm(){
    return (
        <AuthFormLayout maintitle="Create Your Account" titlebtn="Sign Up" signupfields={ <SignUpFields/> }/>
    )
}