import {UsersDiagram} from "@/features/users-diagram/ui/users-diagram";

interface Props{
    className?:string,
}

export const UsersCount:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flec-col">
            <UsersDiagram/>
        </div>
    )
}