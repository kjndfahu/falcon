import {userRepository} from "@/enteties/user/repositories/user";
import {left, right} from "@/shared/lib/either";
import {passwordService} from "@/enteties/user/services/password";

export async function verifyUserPassword({login, password} :{login?: string, password?:string}) {
    // Try to find user by login or email
    const user = await userRepository.getUser({
        OR: [
            { login },
            { email: login }
        ]
    });

    if(!user){
        return left("wrong-login-or-password" as const)
    }

    const { password: hashedPassword, salt } = user;

    if (!hashedPassword || !salt) {
        return left("wrong-login-or-password" as const);
    }

    const isCompare = await passwordService.comparePasswords({
        password,
        hash: hashedPassword,
        salt,
    });


    if(!isCompare){
        return left("wrong-login-or-password" as const)
    }

    return right(user)
}