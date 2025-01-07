import {$Enums} from "@prisma/client";
import {UserId} from "@/kernel/ids";
import {getSubscription} from "@/enteties/subscription/repositories/subscription";

export const checkRole = async (id: UserId, role: $Enums.Role)=> {
    const getUserSubs = await getSubscription(id)
    const subsCount = getUserSubs.length

    let progress = 0;

    switch (role) {
        case 'RESELLER':
            if (subsCount >= 0 && subsCount <= 4) {
                progress = (subsCount / 4) * 100;
            } else {
                return { error: "Subscription count exceeds role limit for RESELLER." };
            }
            break;

        case 'PARTNER':
            if (subsCount >= 5 && subsCount <= 14) {
                progress = ((subsCount - 5) / (14 - 5)) * 100;
            } else {
                return { error: "Subscription count exceeds role limit for PARTNER." };
            }
            break;

        case 'VIPPARTNER':
            if (subsCount >= 15 && subsCount <= 29) {
                progress = ((subsCount - 15) / (29 - 15)) * 100;
            } else {
                return { error: "Subscription count exceeds role limit for VIP_PARTNER." };
            }
            break;

        case 'DISTRIBUTOR':
            if (subsCount >= 30) {
                progress = 100;
            } else {
                progress = (subsCount / 30) * 100;
            }
            break;

        default:
            return { error: "Invalid role specified." };
    }

    return {
        subsCount,
        role,
        progress: Math.min(progress, 100),
    };
}