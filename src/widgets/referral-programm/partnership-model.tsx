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
                <InfoBlock title="Reseller Partnership"
                           styles="bg-[#F6FCFF]"
                           text="As a reseller, you earn commissions for every bot you sell. You’ll get access to our products at discounted rates and can offer them to your clients with market price."
                           logo={ <SaveIcon/> }/>
                <InfoBlock title="Influencer Partnership"
                           styles="bg-[#F6FCFF]"
                           text="As influencers, you promote our product and earn a percentage of the purchases made by your referrals or a fixed payment based on your audience reach."
                           logo={ <SaveIcon/> }/>
            </div>
        </div>
    )
}