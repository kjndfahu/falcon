import { NextResponse } from 'next/server'

export async function POST() {
    try {
        const verificationCode = Math.floor(10000 + Math.random() * 90000).toString()
        process.env.CURRENT_VERIFICATION_CODE = verificationCode
        await sendCodeToTelegram(verificationCode)
        
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error sending code:', error)
        return NextResponse.json(
            { error: 'Failed to send verification code' },
            { status: 500 }
        )
    }
}

async function sendCodeToTelegram(code: string) {
    const TELEGRAM_BOT_TOKEN = "7586414621:AAHVHOMUgJr7s364uXJufB71b5Ep-LakCLI";
    const TELEGRAM_CHAT_ID = "-1002487651254";
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: `Verification code: ${code}`,
                parse_mode: "Markdown"
            }),
        })
        
        const data = await response.json()
        console.log('Telegram API response:', data)
        
        if (!response.ok) {
            throw new Error(`Failed to send message to Telegram: ${JSON.stringify(data)}`)
        }
        
        return data
    } catch (error) {
        console.error('Error in sendCodeToTelegram:', error)
        throw error
    }
}
