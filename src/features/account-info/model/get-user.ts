import {Prisma} from "@prisma/client";
import {prisma} from "@/shared/lib/db";

export async function getUserInfo(where?: Prisma.UserWhereInput) {
    const user = await prisma.user.findFirst({where});
    return user;
}