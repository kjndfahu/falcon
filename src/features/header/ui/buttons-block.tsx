import {Button} from "@/shared/ui/button";
import Link from "next/link";

export const ButtonsBlock = () => {
    return(
        <div className="flex smbvp:flex-row flex-col items-center mdbvp:text-[16px] smbvp:mx-[50px] text-[14px] mdbvp:gap-[25px] md:gap-[15px] gap-[10px]">
            <Link href="/sign-in">
                <Button title="Log in" styles="bg-[#0057FF] w-full p-3 leading-[20px] rounded-[5px]"/>
            </Link>
            <Link href="/sign-up">
                <Button title="Sign up" styles="bg-[#101D2C] leading-[20px] rounded-[5px]"/>
            </Link>
        </div>
    )
}