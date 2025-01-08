import {ReferralLevelsBlock} from "@/features/referral-programm/ui/referral-levels-block";
import {
    DistributorLogo,
    NumFour,
    NumOne,
    NumThree,
    NumTwo,
    PartnerLogo,
    ResellerLogo,
    VIPPartnerLogo
} from "@/shared/ui/referral-icons";
import {SwitchBenefits} from "@/features/referral-programm/ui/switch-benefits";

interface Props {
    className?: string;
}

export const PartneshipLevels:React.FC<Props> = ({}) => {
    return (
        <div className="flex items-center gap-[50px] sml:px-[50px] px-[20px] flex-col font-semibold text-[36px] leading-[40px] xl:h-[1309px] xl:pb-0 pb-[30px] pt-[50px] bg-cover bg-bg-referral bg-center">
            Partnesrhip Levels
            <div className="flex items-center justify-center flex-wrap gap-[40px]">
                <ReferralLevelsBlock number={ <NumOne className="mds:h-auto mds:w-auto h-[120px] w-[50px]"/> }
                                     blockstyles="bg-[#2e3a71] text-[#96CAFF]"
                                     title="Reseller"
                                     text="Become a Reseller with 0-4 active subscriptions to start earning commissions and receive a 5% discount. You’ll gain access to basic tools to begin our partnership and start growing your business."
                                     laststyles="text-[#96CAFF]"
                                     logo1={ <ResellerLogo/> }
                />
                <ReferralLevelsBlock number={ <NumTwo className="mds:h-auto mds:w-auto h-[120px] w-[120px]"/> }
                                     blockstyles="bg-[#2d3d71] text-[#BCFBFF]"
                                     title="Partner"
                                     text="Become a Partner with 5-15 active subscriptions to unlock a 10% discount and access to a personal group with Plan Basic for testing. This level provides more resources to help you expand your business."
                                     laststyles="text-[#BCFBFF]"
                                     logo1={ <PartnerLogo/> }
                />
                <ReferralLevelsBlock number={ <NumThree className="mds:h-auto mds:w-auto h-[120px] w-[120px]"/> }
                                     blockstyles="bg-[#353e60] text-[#FBFF4A]"
                                     title="VIP Partner"
                                     text="Become a VIP Partner with 15-30 active subscriptions to enjoy a 15% discount and access to a personal group with Plan Fast for testing. At this level, you’ll also receive VIP support, ensuring quick resolution..."
                                     laststyles="text-[#FBFF4A]"
                                     logo1={ <VIPPartnerLogo/> }
                />
                <ReferralLevelsBlock number={ <NumFour className="mds:h-auto mds:w-auto h-[120px] w-[120px]"/> }
                                     blockstyles="bg-[#342b67] text-[#FF4A8B]"
                                     title="Distributor"
                                     text="Become a Distributor with 30+ active subscriptions to unlock the highest benefits, including a 20% discount and access to a personal group for testing with plan Turb..."
                                     laststyles="text-[#FF4A8B]"
                                     logo1={ <DistributorLogo/> }
                />
            </div>
            <div className="xl:mx-[160px]">
                <SwitchBenefits/>
            </div>
        </div>
    )
}