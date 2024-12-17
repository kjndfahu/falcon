
import {Button} from "@/shared/ui/button";
import {GoogleButton} from "@/shared/ui/google-button";

interface Props{
    signupfields?: React.ReactNode;
    signinfields?: React.ReactNode;
    titlebtn: string;
    maintitle:string;
}

export const AuthFormLayout:React.FC<Props> = ({signinfields, signupfields, maintitle, titlebtn}) => {
    return (
        <div className="flex flex-col w-full text-[#0A131D] text-[32px] font-semibold">
            <h3>{maintitle}</h3>
            {signupfields}
            {signinfields}
            <Button styles="flex justify-center text-[18px] mt-[25px] py-4 font-light text-white rounded-[15px] bg-[#0057FF]" title={titlebtn}/>
            <GoogleButton/>
        </div>
    )
}