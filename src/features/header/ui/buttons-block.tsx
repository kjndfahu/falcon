import {Button} from "@/shared/ui/button";
import Link from "next/link";

export const ButtonsBlock = () => {
    return(
        <div className="flex md:flex-row flex-col items-center justify-end xl:gap-[25px] sml:px-0 px-[20px] gap-[15px]">
            <div className="w-full">
                <Link href="/sign-in">
                    <Button title="Log in" styles="bg-[#0057FF] md:w-[80px] w-full leading-[20px] py-[15px] md:rounded-[5px] rounded-[12px]"/>
                </Link>
            </div>
            <div className="w-full ">
                <Link href="/sign-up">
                    <Button title="Sign up" styles="bg-[#101D2C] md:w-[80px] w-full leading-[20px] py-[15px] md:rounded-[5px] rounded-[12px]"/>
                </Link>
            </div>
        </div>
    )
}