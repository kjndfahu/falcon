import {Message} from "@/shared/ui/icons";
import {Button} from "@/shared/ui/button";

interface Props {
    title?: string;
    children: React.ReactNode;
}

export const Feedback:React.FC<Props> = ({children, title}) => {
    return (
        <div className="flex flex-col gap-[50px] px-[187px] py-[53px] mx-[220px] my-[70px] border-[1px] border-[#BEDAE9] rounded-[15px] bg-[#F6FCFF]">
            <div className="flex items-center text-[32px] leading-[30px] font-bold text-[#0A131D] gap-3">
                <Message/>
                {title}
            </div>
            {children}
            <Button title="Send" styles="bg-[#0057FF] justify-center rounded-[15px] py-[18px]"/>
        </div>
    )
}