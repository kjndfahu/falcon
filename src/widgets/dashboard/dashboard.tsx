import {PcBlock} from "@/shared/ui/pc-block";
import {Modal} from "@/shared/ui/modal";
import {CircleChevronRight} from "lucide-react";
import {SessionEntity} from "@/enteties/user/domain";

interface Props{
    session: SessionEntity
}

export const Dashboard:React.FC<Props> = ({session}) => {
    return (
        <div className='flex gap-[50px]'>
            <PcBlock session={session} modal={<Modal title="Всего подписок: "/>} title="Всего подписок: "
                     styles="text-[20px]" num={100} btn={<CircleChevronRight color="#000000"/>}/>
            <PcBlock session={session} modal={<Modal title="Суммарный баланс пользователей: "/>} title="Суммарный баланс пользователей: " styles="text-[20px]"
                     num={100} btn={<CircleChevronRight color="#000000"/>}/>
        </div>
    )
}