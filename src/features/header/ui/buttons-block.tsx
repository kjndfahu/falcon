import {Button} from "@/shared/ui/button";
import Link from "next/link";

export const ButtonsBlock = () => {
    return(
        <div className="flex md:flex-row flex-col items-center xl:gap-[25px] gap-[15px]">
            <Link href="/sign-in">
                <Button title="Log in" styles="bg-[#0057FF] md:w-auto w-[100vw] leading-[20px] py-[15px] rounded-[5px]"/>
            </Link>
            <Link href="/sign-up">
                <Button title="Sign up" styles="bg-[#101D2C] md:w-auto w-[100vw] leading-[20px] py-[15px] rounded-[5px]"/>
            </Link>
        </div>
    )
}