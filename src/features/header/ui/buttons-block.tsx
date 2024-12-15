import {Button} from "@/shared/ui/button";

export const ButtonsBlock = () => {
    return(
        <div className="flex items-center gap-[25px]">
            <Button title="Log in" styles="bg-[#0057FF] leading-[20px] rounded-[5px]"/>
            <Button title="Sign up" styles="bg-[#101D2C] leading-[20px] rounded-[5px]"/>
        </div>
    )
}