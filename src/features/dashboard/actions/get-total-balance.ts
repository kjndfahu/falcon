import {getTotalBalance} from "@/enteties/user/repositories/user";

export async function calculateTotalBalance() {
    const users = await getTotalBalance();

    const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);

    return totalBalance;
}