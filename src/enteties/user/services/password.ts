import { pbkdf2, randomBytes } from "node:crypto";

async function hashPassword(password: string, salt = randomBytes(16).toString('hex')){
    const hash = await new Promise<Buffer>((res, rej) =>
        pbkdf2(password, salt, 1000, 64, `sha512`, (error, value) =>
            error ? rej(error) : res(value)),
    )

    return {
        hash: hash.toString('hex'),
        salt
    }
}

async function comparePasswords({hash, password, salt}: {password: string, hash: string, salt: string}){
    return hash === ((await hashPassword(password, salt))).hash
}

async function verifyPassword(password: string, storedHash: string, storedSalt: string): Promise<boolean> {
    return await comparePasswords({
        hash: storedHash,
        password,
        salt: storedSalt
    });
}


export const passwordService={comparePasswords, verifyPassword, hashPassword}