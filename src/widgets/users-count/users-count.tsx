import {UsersDiagram} from "@/features/users-diagram/ui/users-diagram";

interface Props{
    users:  {id: number;
        createdAt: Date;
    }[];
}

export const UsersCount:React.FC<Props> = ({users}) => {
    return (
        <div className="flex flex-col text-[25px] text-black font-semibold w-full gap-[50px] flec-col">
            <h3>Всего пользователей</h3>
            <UsersDiagram users={users}/>
        </div>
    )
}