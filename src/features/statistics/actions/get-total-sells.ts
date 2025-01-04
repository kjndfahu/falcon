import {getTotalSells} from "@/enteties/user/repositories/user";

export async function getTotalSell() {
    const sells = await getTotalSells();
    const totalPrice = sells.reduce((sum, sell) => sum + (sell.price || 0), 0);
    return totalPrice;
}