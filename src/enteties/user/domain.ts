import { UserId } from "@/kernel/ids";

export type Role = "USER" | "ADMIN" | "RESELLER" | "PARTNER" | "VIPPARTNER" | "DISTRIBUTOR";
export type DepositType = "USDT" | "VISA";

export type UserEntity = {
    id: UserId;
    login: string;
    role: Role;
    email: string;
    password: string;
    salt: string;
    referralCode: string;
}

export type DepositEntity = {
    id: number;
    depositSum: number;
    type: DepositType;
    user: UserEntity;
}

export type SessionEntity = {
    id: UserId;
    email: string;
    role: Role;
    login: string;
    expiredAt: string;
}

export const userToSession = (user: UserEntity,  expiredAt: string) => {
    return {
        id: user.id,
        email: user.email,
        role: user.role,
        login: user.login,
        expiredAt
    }
}