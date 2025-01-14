'use server'

import { getUserSells } from "./get-user-sells"

export async function getUserSellsAction(email: string) {
    try {
        return await getUserSells(email)
    } catch (error) {
        console.error("Error in getUserSellsAction:", error)
        throw new Error("Failed to fetch user sells")
    }
}
