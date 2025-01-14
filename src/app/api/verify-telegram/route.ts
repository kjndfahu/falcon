import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        const { code } = await request.json()
        console.log('Received code:', code)
        console.log('Stored code:', process.env.CURRENT_VERIFICATION_CODE)

        const isCodeValid = code === process.env.CURRENT_VERIFICATION_CODE
        console.log('Is code valid:', isCodeValid)

        if (isCodeValid) {
            // Set verified cookie
            const cookieStore = await cookies()
            cookieStore.set('verified', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/'
            })

            return NextResponse.json({ success: true })
        }

        return NextResponse.json(
            { error: 'Invalid verification code', 
              received: code, 
              expected: process.env.CURRENT_VERIFICATION_CODE 
            },
            { status: 400 }
        )
    } catch (error) {
        console.error('Verification error:', error)
        return NextResponse.json(
            { error: 'Verification failed' },
            { status: 500 }
        )
    }
}
