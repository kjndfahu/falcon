'use client'
import { useState, useTransition } from "react";

interface Props {
    email: string;
    onVerificationComplete: (code: string) => Promise<boolean>;
    isPending?: boolean;
    onResendCode: () => Promise<boolean>;
}

export const Verification: React.FC<Props> = ({
                                                  email,
                                                  onVerificationComplete,
                                                  isPending,
                                                  onResendCode
                                              }) => {
    const [code, setCode] = useState<string[]>(Array(5).fill(""));
    const [error, setError] = useState<string | null>(null);
    const [isResending, startResending] = useTransition();

    const handleInputChange = (value: string, index: number) => {
        if (isNaN(Number(value))) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        const nextInput = document.getElementById(`code-${index + 1}`);
        if (value && nextInput) {
            (nextInput as HTMLInputElement).focus();
        }
    };

    const handleSubmit = async () => {
        setError(null);
        const fullCode = code.join("").trim();

        if (fullCode.length === 5) {
            try {
                const isValid = await onVerificationComplete(fullCode);
                if (!isValid) {
                    setError("Invalid verification code");
                }

            } catch (err) {
                console.error("Verification error:", err);
                setError("Error during verification");
            }
        } else {
            setError("Please enter full code");
        }
    };

    const handleResendCode = () => {
        startResending(async () => {
            try {
                const success = await onResendCode();
                if (success) {
                    setError(null);
                    console.log('Verification code sent successfully');
                } else {
                    setError('Failed to send code');
                }
            } catch (err) {
                setError('Failed to send verification code');
                console.error(err);
            }
        });
    };

    return (
        <div className="flex flex-col w-full items-center justify-center md:min-h-screen">
            <div className="w-full bg-white">
                <h2 className="text-[32px] font-bold text-gray-900 mb-4">
                    Mail verification
                </h2>
                <p className="text-[18px] text-gray-600 mb-6">
                    Enter the code sent to {email}
                </p>
                <div className="flex sml:justify-center justify-between sml:gap-8 mb-6">
                    {code.map((value, index) => (
                        <input
                            key={index}
                            id={`code-${index}`}
                            type="text"
                            maxLength={1}
                            value={value}
                            onChange={(e) => handleInputChange(e.target.value, index)}
                            className="sml:w-[80px] sm:w-[70px] w-[60px] sml:h-[80px] sm:h-[70px] h-[60px] text-center text-black text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    ))}
                </div>
                {error && (
                    <div className="text-red-500 text-center mb-4">
                        {error}
                    </div>
                )}
                <button
                    onClick={handleSubmit}
                    disabled={isPending}
                    className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 disabled:opacity-50"
                >
                    <span>{isPending ? 'Verifying...' : 'Verify Email'}</span>
                </button>
                <button
                    onClick={handleResendCode}
                    disabled={isResending}
                    className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 disabled:opacity-50"
                >
                    <span>{isResending ? 'Sending...' : 'Resend Code'}</span>
                </button>
            </div>
        </div>
    );
};