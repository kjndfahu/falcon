import {left, right} from "@/shared/lib/either";
import ShortUniqueId from 'short-unique-id';
import {passwordService} from "@/enteties/user/services/password";
import {userRepository} from "@/enteties/user/repositories/user";
import {generateReferralCode} from "@/enteties/user/services/referralcode-generation";

export const createUser = async ({
    login,
    email,
    password
}: {login: string, email: string, password: string}) => {
    const userWithLogin = await userRepository.getUser({login})
    const userWithEmail = await userRepository.getUser({email})

    const uid = new ShortUniqueId({ dictionary: 'number', length: 4 });

    if(userWithLogin || userWithEmail){
        return left('user-already-exists' as const)
    }

    const {hash, salt} = await passwordService.hashPassword(password)

    const user = await userRepository.saveUser({
        id:  parseInt(uid.randomUUID()),
        role: "USER",
        login,
        email,
        password: hash,
        salt,
        referralCode: generateReferralCode()
    })

    return right(user);
}