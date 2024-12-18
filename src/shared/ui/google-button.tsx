import {GoogleLogo} from "@/shared/ui/pc-icons";

interface Props{
    className?:string;
}

export const GoogleButton:React.FC<Props> = ({}) => {
    return (
        <div className="flex cursor-pointer items-center font-light gap-[10px] mt-[25px] justify-center py-[20px] border-[1px] rounded-[15px] text-[16px] text-[#1F1F1F] border-[#DBDBDB]">
            <GoogleLogo/>
            Continue with Google
        </div>
    )
}