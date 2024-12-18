import {Button} from "@/shared/ui/button";
import Link from "next/link";

export const ButtonsBlock = () => {
    return(
        <div className="flex items-center gap-[25px]">
            <Link href="/sign-in">
                <Button title="Log in" styles="bg-[#0057FF] leading-[20px] rounded-[5px]"/>
            </Link>
            <Link href="/sign-up">
                <Button title="Sign up" styles="bg-[#101D2C] leading-[20px] rounded-[5px]"/>
            </Link>
        </div>
    )
}