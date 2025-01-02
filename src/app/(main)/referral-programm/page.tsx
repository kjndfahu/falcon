import {Hero} from "@/shared/ui/hero";
import {StatusTable} from "@/widgets/referral-programm/status-table";
import {PartnershipModel} from "@/widgets/referral-programm/partnership-model";
import {FeedbackForm} from "@/shared/ui/feedback-form";
import {Feedback} from "@/shared/ui/feedback";
import {PartneshipLevels} from "@/widgets/referral-programm/partneship-levels";
import {BecomePartner} from "@/widgets/referral-programm/become-partner";

export default function ReferralProgramPage() {
    return (
        <div className="flex flex-col gap-[70px]">
            <Hero banner="bg-referral-program"
                  text="Strive to build strong, mutually beneficial relationships with peoples who share our vision. Whether you're just starting out or you're an experienced professional, we offer a range of partnership."
                  title="We value our partnerships"/>
            <StatusTable/>
            <PartnershipModel/>
            <PartneshipLevels/>
            <BecomePartner/>
            <Feedback title="Leave your request" child={ <FeedbackForm question="Count of active counts" /> }/>
        </div>
    )
}