import {userRepository} from "@/enteties/user/repositories/user";
import {UserId} from "@/kernel/ids";

export const changeRole = async ({id} : {id:UserId}) => {
    const userToChange = await userRepository.getUser({id})

}