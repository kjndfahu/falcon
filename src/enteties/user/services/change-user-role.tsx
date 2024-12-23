import {$Enums} from "@prisma/client";
import {userRepository} from "@/enteties/user/repositories/user";

export async function changeUserRole(email: string, role: $Enums.Role) {
    const changeRole = await userRepository.changeUserRole(
        email,
        role
    )

    return changeRole;
}