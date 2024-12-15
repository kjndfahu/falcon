import {EnterLogo} from "@/shared/ui/icons";

interface Props {
    className?: string;
    title?: string;
    styles?:string;
}

export const Buttons:React.FC<Props> = ({className, styles, title}) => {
    return (
        <div className={`flex ${styles} items-center font-normal p-2 gap-2`}>
            <EnterLogo/>
            {title}
        </div>
    )
}