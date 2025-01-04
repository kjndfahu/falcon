'use client';

import { AdminBlocks } from "@/features/admin-users/ui/admin-blocks";
import { CircleDollarSign, RefreshCcw, ShieldX, UserRoundPlus } from "lucide-react";
import { AddBalanceModal } from "@/features/admin-users/ui/add-balance-modal";
import { ChangeRoleModal } from "@/features/admin-users/ui/change-role-modal";
import { useState } from "react";
import {RestoreAccessModal} from "@/features/admin-users/ui/restore-access-modal";
import {BlockUserModal} from "@/features/admin-users/ui/block-user";

export const AdminAbilities = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    console.log(activeModal)

    const handleModalOpen = (modalName: string) => {
        setActiveModal((prev) => (prev === modalName ? null : modalName));
    };

    return (
        <>
            <div className="flex mds:flex-row flex-col lg:gap-[50px] gap-[25px]">
                <AdminBlocks
                    title="Восстановить доступ"
                    styles="h-[169px]"
                    logo={<RefreshCcw width={40} height={40} />}
                    isActive={activeModal === "restoreAccess"}
                    onClick={() => handleModalOpen("restoreAccess")}
                    child={
                        activeModal === "restoreAccess" && (
                            <RestoreAccessModal activeModal={activeModal} setActiveModal={setActiveModal}/>
                        )
                    }
                />
                <AdminBlocks
                    title="Назначить роль"
                    styles="h-[169px]"
                    logo={<UserRoundPlus width={40} height={40} />}
                    child={
                        activeModal === "changeRole" && (
                            <ChangeRoleModal activeModal={activeModal} setActiveModal={setActiveModal}/>
                        )
                    }
                    isActive={activeModal === "changeRole"}
                    onClick={() => handleModalOpen("changeRole")}
                />
            </div>
            <div className="flex mds:flex-row flex-col lg:gap-[50px] gap-[25px]">
                <AdminBlocks
                    title="Изменить баланс"
                    styles="h-[169px]"
                    logo={<CircleDollarSign width={40} height={40} />}
                    child={
                        activeModal === "addBalance" && (
                            <AddBalanceModal activeModal={activeModal} setActiveModal={setActiveModal}/>
                        )
                    }
                    isActive={activeModal === "addBalance"}
                    onClick={() => handleModalOpen("addBalance")}
                />
                <AdminBlocks
                    title="Unblock/Block"
                    styles="h-[169px]"
                    logo={<ShieldX width={40} height={40} />}
                    isActive={activeModal === "blockUnblock"}
                    onClick={() => handleModalOpen("blockUnblock")}
                    child={
                        activeModal === "blockUnblock" && (
                            <BlockUserModal activeModal={activeModal} setActiveModal={setActiveModal}/>
                        )
                    }
                />
            </div>
        </>
    );
};