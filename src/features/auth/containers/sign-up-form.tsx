'use client'

import {AuthFormLayout} from "@/features/auth/ui/auth-form-layout";
import {SignUpFields} from "@/features/auth/ui/sign-up-fields";
import {useActionState} from "@/shared/lib/react";
import {signUpAction, SignUpFormState} from "@/features/auth/actions/sign-up";
import {Button} from "@/shared/ui/button";
import {ErrorMessage} from "@/features/auth/ui/error-message";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function SignUpForm() {
    const [formState, action, isPending] = useActionState(signUpAction, {} as SignUpFormState);
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
            maintitle="Create Your Account"
            titlebtn="Sign Up"
            fields={
                <>
                    <SignUpFields {...formState}/>
                </>
            }
            actions={
                <Button
                    isPending={isPending}
                    styles="flex w-full justify-center text-[18px] mt-[25px] py-4 font-light text-white rounded-[15px] bg-[#0057FF]"
                    title="Sign up"
                />
            }
            errors={<ErrorMessage error={formState.errors?._errors}/>}
        />
    )
}