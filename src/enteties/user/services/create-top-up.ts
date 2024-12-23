import {userRepository} from "@/enteties/user/repositories/user";
import {$Enums} from "@prisma/client";

export async function createdTopUp(depositSum: number, type:  $Enums.DepositType, system:$Enums.DepositSystem ,userId: number){
    const createDeposit = await userRepository.createTopUp(
        depositSum,
        type,
        system,
        userId
    )

    return createDeposit;
}