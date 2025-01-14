'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

export function TelegramVerificationForm() {
    const [code, setCode] = useState(['', '', '', '', ''])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleCodeChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...code]
            newCode[index] = value
            setCode(newCode)

            if (value && index < 4) {
                const nextInput = document.querySelector(`input[name="code-${index + 1}"]`) as HTMLInputElement
                if (nextInput) nextInput.focus()
            }
        }
    }

    const handleVerify = async () => {
        setLoading(true)
        try {
            const verificationCode = code.join('')
            const response = await fetch('/api/verify-telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: verificationCode })
            })

            if (response.ok) {
                setCookie('verified', 'true')
                router.push('/dashboard')
            } else {
                alert('Invalid verification code')
            }
        } catch (error) {
            console.error('Verification error:', error)
            alert('Verification failed')
        } finally {
            setLoading(false)
        }
    }

    const handleResendCode = async () => {
        try {
            await fetch('/api/resend-code', {
                method: 'POST'
            })
            alert('New code has been sent')
        } catch (error) {
            console.error('Error resending code:', error)
            alert('Failed to resend code')
        }
    }

    return (
        <div className="flex flex-col w-full items-center justify-center md:min-h-screen">
            <div className="w-full bg-white">
                <h2 className="text-[32px] font-bold text-gray-900 mb-4">
                    Telegram verification
                </h2>
                <p className="text-[18px] text-gray-600 mb-6">
                    Enter the code sent to telegram
                </p>
                <div className="flex sml:justify-center justify-between sml:gap-8 mb-6">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            name={`code-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleCodeChange(index, e.target.value)}
                            className="sml:w-[80px] sm:w-[70px] w-[60px] sml:h-[80px] sm:h-[70px] h-[60px] text-center text-black text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    ))}
                </div>

                <button
                    onClick={handleVerify}
                    disabled={loading || code.some(digit => !digit)}
                    className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 disabled:opacity-50"
                >
                    <span>{loading ? 'Verifying...' : 'Verify Tg'}</span>
                </button>
                <button
                    onClick={handleResendCode}
                    disabled={loading}
                    className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 disabled:opacity-50"
                >
                    <span>Resend Code</span>
                </button>
            </div>
        </div>
    )
}