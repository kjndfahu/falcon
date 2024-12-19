"use server";

import {z} from "zod";
import {createUser} from "@/enteties/user/services/create-user";
import {sessionService} from "@/enteties/user/services/session";
import {redirect} from "next/navigation";

export type SignUpFormState = {
    formData?: FormData;
    errors?: {
        login?: string;
        email?: string;
        password?: string;
        confirmPassword?:string
        _errors?: string;
    }
}

const formDataSchema = z.object({
    login: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3, "Confirm Password must be at least 3 characters long"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export const signUpAction = async(
    state: SignUpFormState,
    formData: FormData,
): Promise<SignUpFormState> => {
    const data = Object.fromEntries(formData.entries());
    const result = formDataSchema.safeParse(data);

    if(!result.success) {
        const formattedErrors = result.error.format();

        return {
            formData,
            errors: {
                login: formattedErrors?.login?._errors.join(', '),
                email: formattedErrors?.email?._errors.join(', '),
                password: formattedErrors?.password?._errors.join(', '),
                confirmPassword: formattedErrors?.confirmPassword?._errors.join(', '),
                _errors: formattedErrors?._errors.join(', ')
            }
        }
    }


    const createUserResult = await createUser(result.data);

    if (createUserResult.type === "right") {
        await sessionService.addSession(createUserResult.value);

        redirect("/");
    }

    const errors = {
        "user-already-exists": "Пользователь с таким login или email существует",
    }[createUserResult.error];

    return {
        formData,
        errors: {
            _errors: errors,
        },
    }
}