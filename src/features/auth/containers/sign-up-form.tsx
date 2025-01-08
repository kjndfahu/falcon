'use client'

import {AuthFormLayout} from "@/features/auth/ui/auth-form-layout";
import {SignUpFields} from "@/features/auth/ui/sign-up-fields";
import {useActionState} from "@/shared/lib/react";
import {signUpAction, SignUpFormState} from "@/features/auth/actions/sign-up";
import {Button} from "@/shared/ui/button";
import {ErrorMessage} from "@/features/auth/ui/error-message";
import { useSession } from "next-auth/react";
import { useEffect, useState, useTransition } from "react";
import { useRouter, useParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Verification } from "../ui/verification";
import { sendVerificationEmail } from "../actions/send-verification-email";
import {Terms} from "@/features/auth/ui/terms";

export function SignUpForm() {
    const [formState, action, isPending] = useActionState<SignUpFormState>(signUpAction, {
        formData: undefined,
        errors: undefined,
        user: undefined
    });
    const [showVerification, setShowVerification] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [formData, setFormData] = useState<FormData | null>(null);
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [isVerifying, startVerifying] = useTransition();
    const { status } = useSession();
    const router = useRouter();
    const params = useParams();
    const referralCode = params?.referralCode as string;

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/personal-cabinet");
        }
    }, [status, router]);

    const handleSubmit = async (formData: FormData) => {
        const validationResult = await action(formData);
        if (validationResult.errors) {
            return;
        }

        const email = formData.get('email') as string;

        if (!email || !email.includes('@')) {
            return;
        }

        setUserEmail(email);
        setFormData(formData);

        const verificationResult = await sendVerificationEmail({}, formData);

        if (verificationResult.success && verificationResult.verificationCode) {
            setVerificationCode(verificationResult.verificationCode);
            setShowVerification(true);
        }
    };

    const handleVerificationComplete = async (code: string) => {
        if (!formData) return false;

        const cleanInputCode = code.toString().trim();
        const cleanVerificationCode = verificationCode.toString().trim();

        if (cleanInputCode !== cleanVerificationCode) {
            return false;
        }

        return new Promise<boolean>((resolve) => {
            startVerifying(async () => {
                try {
                    const newFormData = new FormData();
                    for (const [key, value] of formData.entries()) {
                        newFormData.append(key, value);
                    }

                    if (referralCode) {
                        newFormData.append('referralCode', referralCode);
                    }

                    const actionResult = await signUpAction({} as SignUpFormState, newFormData);
                    console.log('Registration attempt result:', actionResult);

                    if (actionResult.errors) {
                        action(newFormData);
                        console.error('Registration failed:', actionResult.errors._errors || 'Unknown error');
                        resolve(false);
                        return;
                    }

                    if (!actionResult.user) {
                        console.error('Registration failed: No user data received');
                        resolve(false);
                        return;
                    }

                    const login = newFormData.get('login')?.toString();
                    const password = newFormData.get('password')?.toString();

                    if (!login || !password) {
                        console.error('Missing login or password for sign in');
                        resolve(false);
                        return;
                    }

                    try {
                        const signInResult = await signIn("credentials", {
                            login,
                            password,
                            callbackUrl: "/personal-cabinet",
                            redirect: true
                        });

                        if (signInResult?.error) {
                            console.error('Sign in failed:', signInResult.error);
                            resolve(false);
                            return;
                        }

                        resolve(true);
                    } catch (signInError) {
                        console.error("Sign in error:", signInError);
                        resolve(false);
                    }
                } catch (error) {
                    console.error("Verification process error:", error);
                    resolve(false);
                }
            });
        });
    };

    if (showVerification) {
        return <Verification
            email={userEmail}
            onVerificationComplete={handleVerificationComplete}
            isPending={isVerifying}
            onResendCode={async () => {
                if (!formData) return false;
                const verificationResult = await sendVerificationEmail({}, formData);
                if (verificationResult.success && verificationResult.verificationCode) {
                    setVerificationCode(verificationResult.verificationCode);
                    return true;
                }
                return false;
            }}
        />;
    }

    return (
        <AuthFormLayout
            action={handleSubmit}
            maintitle="Create Your Account"
            titlebtn="Sign Up"
            fields={<SignUpFields {...formState}/>}
            terms={ <Terms/> }
            actions={
                <Button
                    isPending={isPending}
                    styles="flex w-full justify-center text-[18px] mt-[25px] py-4 font-light text-white rounded-[15px] bg-[#0057FF]"
                    title="Sign up"
                />
            }
            errors={<ErrorMessage error={formState.errors?._errors}/>}
        />
    );
}