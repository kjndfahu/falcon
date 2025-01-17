import {Message} from "@/shared/ui/icons";

interface Props {
    title?: string;
    child: React.ReactNode;
}

export const Feedback:React.FC<Props> = ({child, title}) => {
    return (
        <div id="section1" className="flex flex-col sml:gap-[50px] gap-[25px] lg:px-[187px] mdbvp:px-[100px] mds:px-[50px] lg:py-[53px] mdbvp:py-[40px] mds:py-[20px] xl:mx-[220px] lg:mx-[150px] mdbvp:mx-[100px] sml:mx-[50px] mx-[20px] my-[70px] mds:border-[1px] mds:border-[#BEDAE9] rounded-[15px] mds:bg-[#F6FCFF]">
            <div className="flex items-center text-[32px] leading-[30px] font-bold text-[#0A131D] gap-3">
                <Message/>
                {title}
            </div>
            {child}
        </div>
    )
}