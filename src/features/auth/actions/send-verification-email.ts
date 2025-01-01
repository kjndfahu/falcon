"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TEST_EMAIL = 'denispoda17@gmail.com';

export type SendVerificationState = {
    formData?: FormData;
    errors?: {
        _errors?: string;
    };
    success?: boolean;
    verificationCode?: string;
};

export async function sendVerificationEmail(
    state: SendVerificationState,
    formData: FormData
): Promise<SendVerificationState> {
    try {
        const email = formData.get('email');
        
        if (!email) {
            return {
                formData,
                errors: {
                    _errors: "Email is required"
                }
            };
        }

        const verificationCode = Math.floor(10000 + Math.random() * 90000).toString();

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: TEST_EMAIL,
            subject: 'Email Verification',
            html: `
                <h1>Email Verification</h1>
                <p>Your verification code is: <strong>${verificationCode}</strong></p>
                <p>This code will expire in 10 minutes.</p>
                <p>Requested for email: ${email}</p>
            `
        });

        return {
            formData,
            success: true,
            verificationCode
        };

    } catch (error) {
        console.error("Error sending verification email:", error);
        return {
            formData,
            errors: {
                _errors: "Failed to send verification email"
            }
        };
    }
} 