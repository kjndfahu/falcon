import {ChangePassword} from "@/features/auth/ui/change-password";

export default async function ChangePasswordPage(){
    return (
        <div className="flex sml:w-auto w-full xl:px-[248px] lg:px-[150px] mdbvp:px-[100px] sml:px-[50px] px-[20px] items-center justify-center md:min-h-screen">
            <ChangePassword/>
        </div>
    )
}