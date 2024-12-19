'use client'
import {AuthFormLayout} from "@/features/auth/ui/auth-form-layout";
import {SignUpFields} from "@/features/auth/ui/sign-up-fields";
import {useActionState} from "@/shared/lib/react";
import {signUpAction, SignUpFormState} from "@/features/auth/actions/sign-up";
import {Button} from "@/shared/ui/button";
import {ErrorMessage} from "@/features/auth/ui/error-message";

export function SignUpForm(){
    const [formState, action, isPending] = useActionState(signUpAction, {} as SignUpFormState)

    console.log('SignUpForm', formState)
    return (
        <AuthFormLayout
            action={action}
            maintitle="Create Your Account"
            titlebtn="Sign Up"
            fields={ <SignUpFields {...formState}/> }
            actions={<Button isPending={isPending} styles="flex justify-center text-[18px] mt-[25px] py-4 font-light text-white rounded-[15px] bg-[#0057FF]" title="Sign up"/>}
            errors={ <ErrorMessage error={formState.errors?._errors}/> }
        />
    )
}