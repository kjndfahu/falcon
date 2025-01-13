'use server'
import {
    getNeededSubscription, updateSubscription,

} from "@/enteties/subscription/repositories/subscription";
import {getUser} from "@/enteties/user/repositories/user";
import {decrementBalance} from "@/enteties/user/services/decrement-balance";

export type RenewSubscription = {
    success?: boolean;
    error?: string;
};


export async function renewSubscription(trackingNumber: number, autorenew: boolean, price: number): Promise<RenewSubscription> {
    let dateDifference = 0;
    try {
        if (autorenew === true) {
            return {
                error: "Insufficient funds on the balance"
            };
        }
        const getSub = await getNeededSubscription(trackingNumber)

        if(!getSub) {
            return {
                error: "Subscription doesn't exist"
            }
        }

        const getPerson = await getUser({id: getSub.userId});

        if(!getPerson) {
            return {
                error: "User doesn't exist"
            }
        }

        if(getPerson.balance < price){
            return {
                error: "User doesn't have enough money"
            }
        }

        await decrementBalance(getPerson.id, price)

        if (getSub.type === "BASIC") {
            switch (true) {
                case (price >= 0 && price <= 50):
                    dateDifference = 30;
                    break;
                case (price > 51 && price <= 135):
                    dateDifference = 90;
                    break;
                case (price > 156 && price <= 240):
                    dateDifference = 180;
                    break;
                default:
                    dateDifference = 30;
            }
        } else if(getSub.type === "FAST"){
            switch (true) {
                case (price >= 0 && price <= 60):
                    dateDifference = 30;
                    break;
                case (price > 61 && price <= 160):
                    dateDifference = 90;
                    break;
                case (price > 161 && price <= 290):
                    dateDifference = 180;
                    break;
                default:
                    dateDifference = 30;
            }
        } else {
            switch (true) {
                case (price >= 0 && price <= 110):
                    dateDifference = 30;
                    break;
                case (price > 111 && price <= 290):
                    dateDifference = 90;
                    break;
                case (price > 291 && price <= 530):
                    dateDifference = 180;
                    break;
                default:
                    dateDifference = 30;
            }
        }

        console.log(dateDifference)
        const newDate = new Date(getSub.endDate);
        const nowDate = new Date();
        if(nowDate > newDate){
            const newRenewDate = new Date(nowDate.getTime() + dateDifference);
            await updateSubscription(trackingNumber, newRenewDate)
        } else {
            newDate.setDate(newDate.getDate() + dateDifference);
            await updateSubscription(trackingNumber, newDate);
        }

        return {success: true}

    } catch (error) {
        console.error("Error toggling auto-renew:", error);
        return {
            error: "Failed to update auto-renew status"
        };
    }
}