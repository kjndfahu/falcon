import {EnterLogo} from "@/shared/ui/icons";

interface Props {
    title?: string;
    styles?:string;
}

export const Button:React.FC<Props> = ({styles, title}) => {
    return (
        <div className={`flex ${styles} cursor-pointer items-center font-normal p-2 gap-2`}>
            <EnterLogo/>
            {title}
        </div>
    )
}