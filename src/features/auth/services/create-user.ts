import ShortUniqueId from "short-unique-id";
import {passwordService} from "@/enteties/user/services/password";
import {prisma} from "@/shared/lib/db";
import {generateReferralCode} from "@/enteties/user/services/referralcode-generation";
import crypto from 'crypto';
import { cookies } from 'next/headers';

const REFERRAL_CODE_KEY = 'referral_code';

interface CreateUserParams {
    email: string;
}

export async function createUserWithReferral({ email }: CreateUserParams) {
    const uid = new ShortUniqueId({ dictionary: 'number', length: 4 });
    const randomPassword = crypto.randomBytes(32).toString('hex');
    const { hash, salt } = await passwordService.hashPassword(randomPassword);
    
    console.log('Creating user with email:', email);

    // Получаем cookie на сервере
    const cookieStore = await cookies();
    const code =  cookieStore.get(REFERRAL_CODE_KEY)?.value;
    console.log('Found referral code in cookies:', code);

    let referredById = 0;
    const newReferralCode = generateReferralCode();

    if (code) {
        const referrer = await prisma.user.findFirst({
            where: { referralCode: code },
            select: { id: true, email: true }
        });
        console.log('Found referrer:', referrer);

        if (referrer) {
            referredById = referrer.id;
            console.log('Setting referredById:', referredById);
            
            // Очищаем cookie
            cookieStore.delete(REFERRAL_CODE_KEY);
        }
    }

    // Создаем пользователя и обновляем реферала в одной транзакции
    const user = await prisma.$transaction(async (tx) => {
        // 1. Создаем пользователя
        const createdUser = await tx.user.create({
            data: {
                id: parseInt(uid.randomUUID()),
                email: email,
                login: email.split('@')[0],
                role: "USER",
                password: hash,
                salt: salt,
                isBlocked: false,
                referralCode: newReferralCode,
                referredBy: referredById,
                discountRate: 0,
                balance: 0
            }
        });
        console.log('Created user:', createdUser);

        // 2. Создаем запись в referrals для нового пользователя
        await tx.referrals.create({
            data: {
                totalReferrals: 0,
                registeredWithPurchase: 0,
                totalCashback: 0,
                purchasesOfReferrals: 0,
                userId: createdUser.id
            }
        });

        // 3. Если был реферер, обновляем его totalReferrals
        if (referredById !== 0) {
            await tx.referrals.updateMany({
                where: { userId: referredById },
                data: {
                    totalReferrals: { increment: 1 }
                }
            });
            console.log('Updated referrer totalReferrals');
        }

        return createdUser;
    });

    return user;
}
