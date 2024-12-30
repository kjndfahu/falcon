"use server";

import { z } from "zod";
import { createUser } from "@/enteties/user/services/create-user";
import { UserEntity } from "@/enteties/user/domain";
import { sessionService } from "@/enteties/user/services/session";
import { prisma } from "@/shared/lib/db";

export type SignUpFormState = {
    formData?: FormData;
    errors?: {
        login?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
        _errors?: string;
    };
    user?: UserEntity;
};

const formDataSchema = z
    .object({
        login: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(3),
        confirmPassword: z
            .string()
            .min(3, "Confirm Password must be at least 3 characters long"),
        referralCode: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const signUpAction = async (
    state: SignUpFormState,
    formData: FormData
): Promise<SignUpFormState> => {
    try {
        const data = Object.fromEntries(formData.entries());
        const result = formDataSchema.safeParse(data);

        if (!result.success) {
            const formattedErrors = result.error.format();
            return {
                formData,
                errors: {
                    login: formattedErrors?.login?._errors.join(", "),
                    email: formattedErrors?.email?._errors.join(", "),
                    password: formattedErrors?.password?._errors.join(", "),
                    confirmPassword: formattedErrors?.confirmPassword?._errors.join(", "),
                    _errors: formattedErrors?._errors.join(", "),
                },
            };
        }

        let createdUser: UserEntity;

        try {
            createdUser = await prisma.$transaction(async (tx) => {
                let referrerId = 0;

                if (result.data.referralCode) {
                    const referrer = await tx.user.findFirst({
                        where: { referralCode: result.data.referralCode }
                    });

                    if (!referrer) {
                        throw new Error("Invalid referral code");
                    }

                    referrerId = referrer.id;
                }

                const createUserResult = await createUser({
                    ...result.data,
                    referredBy: referrerId
                });

                if (createUserResult.type === "left") {
                    throw new Error(createUserResult.value);
                }

                const newUser = createUserResult.value;

                if (referrerId) {
                    const existingReferral = await tx.referrals.findFirst({
                        where: {
                            userId: referrerId
                        }
                    });

                    if (existingReferral) {
                        await tx.referrals.update({
                            where: {
                                id: existingReferral.id
                            },
                            data: {
                                totalReferrals: {
                                    increment: 1
                                }
                            }
                        });
                    } else {
                        await tx.referrals.create({
                            data: {
                                userId: referrerId,
                                totalReferrals: 1
                            }
                        });
                    }
                }

                return newUser;
            });
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : "Transaction failed");
        }

        try {
            await sessionService.addSession(createdUser);
        } catch (error) {
            console.error("Error creating session:", error);
            throw new Error("Failed to create session");
        }
        
        return {
            formData,
            errors: undefined,
            user: createdUser,
        };

    } catch (error) {
        console.error("Error in signUpAction:", error);
        return {
            formData,
            errors: {
                _errors: error instanceof Error ? error.message : "Failed to create user",
            },
        };
    }
};
