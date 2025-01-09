import {UserEntity} from "@/enteties/user/domain";
import {referredBy, userRepository} from "@/enteties/user/repositories/user";
import {Either, left, right} from "@/shared/lib/either";
import {passwordService} from "@/enteties/user/services/password";
import {generateReferralCode} from "@/enteties/user/services/referralcode-generation";
import ShortUniqueId from 'short-unique-id';
import { prisma } from "@/shared/lib/db";

type CreateUserDTO = {
    login: string;
    email: string;
    password: string;
    referredBy?: number;
}

export async function createUser(dto: CreateUserDTO): Promise<Either<string, UserEntity>> {
    try {
        const existingUser = await userRepository.getUser({
            OR: [
                {login: dto.login},
                {email: dto.email}
            ]
        });

        console.log(dto.referredBy, 'dto.referredBy')

        if (existingUser) {
            return left("User already exists");
        }

        const uid = new ShortUniqueId({ dictionary: 'number', length: 4 });
        const {hash, salt} = await passwordService.hashPassword(dto.password);
        const referralCode = generateReferralCode();
        const userId = parseInt(uid.randomUUID());

        const user = await prisma.$transaction(async (tx) => {
            const createdUser = await tx.user.create({
                data: {
                    id: userId,
                    login: dto.login,
                    email: dto.email,
                    password: hash,
                    salt,
                    role: "USER",
                    balance: 0,
                    isBlocked: false,
                    referralCode,
                    referredBy: dto.referredBy || 0,
                    discountRate: 0
                }
            });

            if(dto.referredBy != 0 ){
                const referrer = await tx.user.findFirst({
                    where: { id: dto.referredBy },
                });

                if (!referrer) {
                    throw new Error("Invalid referral code");
                }

                const existingReferral = await tx.referrals.findFirst({
                    where: {
                        userId: referrer.id
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
                }
            }

            await tx.referrals.create({
                data: {
                    totalReferrals: 0,
                    registeredWithPurchase: 0,
                    totalCashback: 0,
                    purchasesOfReferrals: 0,
                    userId: createdUser.id
                }
            });

            return createdUser;
        });

        console.log("User created:", user);
        return right(user);
    } catch (error) {
        console.error("Create user error:", error);
        return left(error instanceof Error ? error.message : "Failed to create user");
    }
}