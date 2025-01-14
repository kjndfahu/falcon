import {getUser, getUserTotalSells} from "@/enteties/user/repositories/user";

export async function getUserSells(email: string) {
    try {
        const user = await getUser({email: email})

        if(!user){
            return "User doesn't exists"
        }

        const getUserSubs = await getUserTotalSells(user.id)

        if(!getUserSubs) {
            return "User doesn't have any subscriptions"
        }

        return getUserSubs
    } catch (error) {
        console.error("Error getting reseller sells:", error);
        throw error;
    }
}