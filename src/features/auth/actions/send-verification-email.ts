"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.domains.verify('ec5b7fe9-4217-4a45-91a6-1a4f64d39a58');

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
        const email = formData.get('email')?.toString();
        const recipientEmail = email;
        const mainMail = 'verify@falcon-tracker.io'

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
            from: mainMail,
            to: recipientEmail,
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
