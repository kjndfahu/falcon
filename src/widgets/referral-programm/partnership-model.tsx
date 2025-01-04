import {SaveIcon} from "@/shared/ui/icons";
import {InfoBlock} from "@/features/why-us/info-block";

interface Props{
    className?:string;
}

export const PartnershipModel:React.FC<Props> = ({}) => {
    return (
        <div className="flex flex-col gap-[50px] items-center justify-center sml:text-[36px] text-[28px] text-black font-semibold leading-[40px] xl:px-[220px] sml:px-[50px] px-[20px]">
            Our Partnership Models
            <div className="flex md:flex-row flex-col sml:gap-[40px] gap-[25px]">
                <InfoBlock title="Real-Time Alerts"
                           styles="bg-[#F6FCFF]"
                           text="Stay ahead with instant notifications Get real-time alerts for important events"
                           logo={ <SaveIcon/> }/>
                <InfoBlock title="Real-Time Alerts"
                           styles="bg-[#F6FCFF]"
                           text="Stay ahead with instant notifications Get real-time alerts for important events"
                           logo={ <SaveIcon/> }/>
            </div>
        </div>
    )
}