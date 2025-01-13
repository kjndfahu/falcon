import {Button} from "@/shared/ui/button";
import Link from "next/link";

interface Props{
    isAuth: boolean;
}

export const ButtonsBlock:React.FC<Props> = ({isAuth}) => {
    return(
        <div className="flex md:flex-row w-full flex-col items-center justify-end xl:gap-[25px] sml:px-0 px-[20px] gap-[15px]">
            {isAuth ? (
                <div className="w-full">
                    <Link href="/personal-cabinet">
                        <Button title="Back to Dashboard"
                                styles="bg-[#0057FF] md:w-[150px] w-full leading-[20px] py-[8px] md:rounded-[5px] rounded-[12px]"/>
                    </Link>
                </div>
            ) : (

                <>
                    <div className="w-full">
                        <Link href="/sign-in">
                            <Button title="Log in"
                                    styles="bg-[#0057FF] md:w-[80px] w-full leading-[20px] py-[8px] md:rounded-[5px] rounded-[12px]"/>
                        </Link>
                    </div>
                    <div className="w-full ">
                        <Link href="/sign-up">
                            <Button title="Sign up"
                                    styles="bg-[#101D2C] md:w-[80px] w-full leading-[20px] py-[8px] md:rounded-[5px] rounded-[12px]"/>
                        </Link>
                    </div>
                </>

            )}
        </div>
    )
}