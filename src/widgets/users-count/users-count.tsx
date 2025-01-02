import {UsersDiagram} from "@/features/users-diagram/ui/users-diagram";

interface Props{
    className?:string,
    users: [];
}

export const UsersCount:React.FC<Props> = ({users, className}) => {
    return (
        <div className="flex flex-col text-[25px] text-black font-semibold w-full gap-[50px] flec-col">
            <h3>Всего пользователей</h3>
            <UsersDiagram users={users}/>
        </div>
    )
}