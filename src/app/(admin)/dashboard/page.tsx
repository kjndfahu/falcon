import {PcBlock} from "@/shared/ui/pc-block";
import {CircleChevronRight} from "lucide-react";
import {Modal} from "@/shared/ui/modal";
import {UsersCount} from "@/widgets/users-count/users-count";

export default async function DashboardPage() {
    return (
        <div className="flex w-full flex-col gap-[50px] px-[62px] pt-[77px]">
            <UsersCount/>
            <div className='flex gap-[50px]'>
                <PcBlock modal={ <Modal/> } title="Всего подписок: " styles="text-[20px]" num="100" btn={<CircleChevronRight color="#000000" />}/>
                <PcBlock modal={ <Modal/> } title="Суммарный баланс пользователей: " styles="text-[20px]" num="100" btn={<CircleChevronRight color="#000000" />}/>
            </div>
        </div>
    )
}