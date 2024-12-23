'use client'

import {AdminBlocks} from "@/features/admin-users/ui/admin-blocks";
import {CircleDollarSign, RefreshCcw, ShieldX, UserRoundPlus} from "lucide-react";
import {AddBalanceModal} from "@/features/admin-users/ui/add-balance-modal";
import {useState} from "react";

export const AdminAbilities = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    console.log(isClicked);
    return (
        <>
            <div className="flex gap-[50px]">
                <AdminBlocks title="Восстановить доступ" styles="h-[169px]"
                             logo={<RefreshCcw width={40} height={40}/>}/>
                <AdminBlocks title="Назначить роль" styles="h-[169px]" logo={<UserRoundPlus width={40} height={40}/>}/>
            </div>
            <div className="flex gap-[50px]">
                <AdminBlocks title="Изменить баланс" setIsClicked={setIsClicked} isClicked={isClicked}
                             child={<AddBalanceModal isClicked={isClicked} setIsClicked={setIsClicked}/>}
                             styles="h-[169px]" logo={<CircleDollarSign width={40} height={40}/>}/>
                <AdminBlocks title="Unblock/Block" styles="h-[169px]" logo={<ShieldX width={40} height={40}/>}/>
            </div>
        </>
    )
}