'use client'

import {SignInFields} from "@/features/auth/ui/sign-in-fields";
import {AuthFormLayout} from "@/features/auth/ui/auth-form-layout";
import {ErrorMessage} from "@/features/auth/ui/error-message";
import {useActionState} from "@/shared/lib/react";
import {signInAction, SignInFormState} from "@/features/auth/actions/sign-in";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Button} from "@/shared/ui/button";
import {useEffect} from "react";

export function SignInForm(){
    const [formState, action, isPending] = useActionState(signInAction, {} as SignInFormState)
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/personal-cabinet");
        }
    }, [status, router]);


    const handleSubmit = async (formData: FormData) => {
        const result = await action(formData);


        // @ts-ignore
        if (result && !result.errors && result.user) {
            const login = formData.get('login') as string;
            const password = formData.get('password') as string;

            try {
                await signIn("credentials", {
                    login,
                    password,
                    callbackUrl: "/personal-cabinet",
                    redirect: true
                });
            } catch (error) {
                console.error("Sign in error:", error);
            }
        }
    };


    return (
        <AuthFormLayout
            action={handleSubmit}
            maintitle="Welcome back"
            titlebtn="Log in"
            fields={ <SignInFields {...formState}/> }
            actions={
                <Button
                    isPending={isPending}
                    styles="flex w-full justify-center text-[18px] mt-[25px] py-4 font-light text-white rounded-[15px] bg-[#0057FF]"
                    title="Sign up"
                />
            }
            errors={ <ErrorMessage error={formState.errors?._errors}/> }/>
    )
}