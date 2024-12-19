import {AdminBlocks} from "@/features/admin-users/ui/admin-blocks";
import {CircleDollarSign, RefreshCcw, ShieldX, UserRoundPlus} from "lucide-react";

export default async function AdminUsersPage() {
    return (
        <div className="flex flex-col gap-[50px] px-[62px] pt-[77px]">
            <div className="flex gap-[50px]">
                <AdminBlocks title="Восстановить доступ" styles="h-[169px]" logo={<RefreshCcw width={40} height={40}/>}/>
                <AdminBlocks title="Назначить роль" styles="h-[169px]" logo={<UserRoundPlus width={40} height={40}/>}/>
            </div>
            <div className="flex gap-[50px]">
                <AdminBlocks title="Изменить баланс" styles="h-[169px]" logo={<CircleDollarSign width={40} height={40}/>}/>
                <AdminBlocks title="Unblock/Block" styles="h-[169px]" logo={<ShieldX width={40} height={40}/>}/>
            </div>
        </div>
    )
}