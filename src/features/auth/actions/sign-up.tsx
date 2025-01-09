"use server";

import { z } from "zod";
import { createUser } from "@/enteties/user/services/create-user";
import { UserEntity } from "@/enteties/user/domain";
import { sessionService } from "@/enteties/user/services/session";
import { getUser } from "@/enteties/user/repositories/user";

export type SignUpFormState = {
    formData?: FormData;
    errors?: {
        login?: string;
        email?: string;
        password?: string;
        _errors?: string;
    };
    user?: UserEntity;
};

const formDataSchema = z.object({
    login: z.string().min(3, "Login must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    referralCode: z.string().optional()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const signUpAction = async (
    state: SignUpFormState,
    formData: FormData
): Promise<SignUpFormState> => {
    try {
        const data = Object.fromEntries(formData.entries());
        console.log('SignUpAction received data:', data);

        const result = formDataSchema.safeParse(data);

        if (!result.success) {
            const errors = result.error.flatten();
            return {
                formData,
                errors: {
                    login: errors.fieldErrors.login?.[0],
                    email: errors.fieldErrors.email?.[0],
                    password: errors.fieldErrors.password?.[0],
                    _errors: errors.formErrors[0] || "Validation failed"
                }
            };
        }

        const findReferredBy = await getUser({referralCode: result.data.referralCode});
        const referredBy = findReferredBy ? findReferredBy.id : null;
        const referredString = String(referredBy);
        console.log(referredString, 'referredString')

        const createUserResult = await createUser({
            login: result.data.login,
            email: result.data.email,
            password: result.data.password,
            referredBy: result.data.referralCode ? parseInt(referredString) : 0
        });

        if (createUserResult.type === "left") {
            return {
                formData,
                errors: {
                    _errors: createUserResult.error || "Failed to create user"
                }
            };
        }

        const user = createUserResult.value;

        try {
            await sessionService.addSession(user);
        } catch (sessionError) {
            console.error("Session creation error:", sessionError);
            return {
                formData,
                errors: {
                    _errors: "Failed to create session"
                }
            };
        }

        return {
            formData,
            user
        };

    } catch (error) {
        console.error("SignUp error:", error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Registration failed"
            }
        };
    }
};