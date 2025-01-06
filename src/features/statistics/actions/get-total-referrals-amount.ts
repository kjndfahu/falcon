import {prisma} from "@/shared/lib/db";


export async function getTotalReferralAmount() {
    try {
        const resellers = await prisma.user.findMany({
            where: {
                referredBy: {
                    not: 0
                }
            },
            select: {
                id: true
            }
        });


        const resellerIds = resellers.map(reseller => reseller.id);

        console.log(resellerIds);

        const resellerSells = await prisma.subscriptions.findMany({
            where: {
                userId: {
                    in: resellerIds
                }
            },
            select: {
                createdAt: true,
                price: true,
                userId: true
            }
        });

        return resellerSells;

    } catch (error) {
        console.error("Error getting reseller sells:", error);
        throw error;
    }
}