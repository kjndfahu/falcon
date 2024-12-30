import {CopyLogo} from "@/shared/ui/pc-icons";

export const SwitchBenefits = () => {
    return (
        <div className="flex flex-col w-full p-[50px] gap-[25px] bg-[linear-gradient(90deg,_rgba(36,_44,_104,_0)_0%,_#242C68_60%,_rgba(71,_87,_206,_0)_100%)] rounded-[15px] border-[1px] border-[#BEDAE9]">
            <div className="flex items-center text-[24px] font-semibold gap-[25px]">
                <CopyLogo/>
                Switch and Get Instant Benefits
            </div>
            <li className="font-extralight text-[#CFDAFF] leading-[18px] text-[18px]">If you’ve been using another provider, transitioning to our service is simple. We value your experience, so we’ll assign you a status that matches the number of active subscriptions you had with your previous provider. For example, if you had 30 clients, you’ll immediately receive the Distributor status, along with all the benefits that come with it.</li>
            <li className="font-extralight text-[#CFDAFF] text-[18px]">Make the switch today and enjoy seamless support and exclusive features with us!</li>
        </div>
    )
}