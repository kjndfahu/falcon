import {userRepository} from "@/enteties/user/repositories/user";
import {sessionService} from "@/enteties/user/services/session";

export const getCurrentUser = async () => {
    const {session} = await sessionService.verifySession()
    return userRepository.getUser({id: session.id})
}