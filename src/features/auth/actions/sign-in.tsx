"use server"

import {z} from "zod";
import {verifyUserPassword} from "@/enteties/user/services/verify-user-password";
import {sessionService} from "@/enteties/user/services/session";
import {redirect} from "next/navigation";

export type SignInFormState = {
    formData?: FormData;
    errors?: {
        login?: string;
        password?: string;
        _errors?: string;
    }
}

const formDataSchema = z.object({
    login: z.string().min(3),
    password: z.string().min(3),
})

export const signInAction = async(state: SignInFormState, formData: FormData): Promise<SignInFormState> => {
    const data = Object.fromEntries(formData.entries())
    const result = formDataSchema.safeParse(data);

    if(!result.success){
        const formattedErrors = result.error.format();
        return {
            formData,
            errors: {
                login: formattedErrors?.login?._errors.join(", "),
                password: formattedErrors?.password?._errors.join(", "),
                _errors: formattedErrors?._errors.join(", "),
            }
        }
    }

    const verifyUserResult = await verifyUserPassword(result.data);

    if(verifyUserResult.type === "right"){
        await sessionService.addSession(verifyUserResult.value);

        redirect("/personal-cabinet")
    }

    const errors = {
        "wrong-login-or-password": "Неверный логин или пароль"
    }[verifyUserResult.error]

    return {
        formData,
        errors: {
            _errors: errors,
        }
    }




}