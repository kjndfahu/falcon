import {MailVerificationForm} from "@/features/auth/containers/mail-verification-form";

export default async function SignInPage(){
    return (
        <div className="flex sml:w-auto w-full xl:px-[248px] lg:px-[150px] mdbvp:px-[100px] sml:px-[50px] px-[20px] items-center justify-center md:min-h-screen">
            <MailVerificationForm/>
        </div>
    )
}