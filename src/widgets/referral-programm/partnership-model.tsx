import {SaveIcon} from "@/shared/ui/icons";
import {InfoBlock} from "@/features/why-us/info-block";

interface Props{
    className?:string;
}

export const PartnershipModel:React.FC<Props> = ({}) => {
    return (
        <div className="flex flex-col gap-[50px] items-center justify-center text-[36px] text-black font-semibold leading-[40px] px-[220px]">
            Our Partnership Models
            <div className="flex gap-[40px]">
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