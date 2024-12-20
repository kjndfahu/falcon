import {UsersDiagram} from "@/features/users-diagram/ui/users-diagram";

interface Props{
    className?:string,
}

export const UsersCount:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-col text-[25px] text-black font-semibold w-full gap-[50px] flec-col">
            <h3>Всего пользователей</h3>
            <UsersDiagram/>
        </div>
    )
}