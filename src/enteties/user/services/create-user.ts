import {UserEntity} from "@/enteties/user/domain";
import {userRepository} from "@/enteties/user/repositories/user";
import {Either, left, right} from "@/shared/lib/either";
import {passwordService} from "@/enteties/user/services/password";
import {generateReferralCode} from "@/enteties/user/services/referralcode-generation";
import ShortUniqueId from 'short-unique-id';

type CreateUserDTO = {
    login: string;
    email: string;
    password: string;
    referredBy?: number;
}

export async function createUser(dto: CreateUserDTO): Promise<Either<string, UserEntity>> {
    const existingUser = await userRepository.getUser({
        OR: [
            {login: dto.login},
            {email: dto.email}
        ]
    });

    if (existingUser) {
        return left("User already exists");
    }

    const uid = new ShortUniqueId({ dictionary: 'number', length: 4 });
    const {hash, salt} = await passwordService.hashPassword(dto.password);
    const referralCode = generateReferralCode();

    const user = await userRepository.saveUser({
        id: parseInt(uid.randomUUID()),
        login: dto.login,
        email: dto.email,
        password: hash,
        salt,
        role: "USER",
        balance: 0,
        isBlocked: false,
        referralCode,
        referredBy: dto.referredBy || 0,
    });

    return right(user);
}