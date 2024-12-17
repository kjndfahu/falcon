import {JSX} from "react";

interface Props{
    children?:JSX.Element,
}

export const PrBlock:React.FC<Props> = ({children}) => {
    return (
        <div className="flex rounded-[15px] px-[25px] py-[28px] w-[413px] border-[1px] border-[#BEDAE9]">
            {children}
        </div>
    )
}