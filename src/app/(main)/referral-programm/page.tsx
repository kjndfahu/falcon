import {Hero} from "@/shared/ui/hero";
import {StatusTable} from "@/widgets/referral-programm/status-table";
import {PartnershipModel} from "@/widgets/referral-programm/partnership-model";
import {FeedbackForm} from "@/shared/ui/feedback-form";
import {Feedback} from "@/shared/ui/feedback";
import {PartneshipLevels} from "@/widgets/referral-programm/partneship-levels";

export default function ReferralProgramPage() {
    return (
        <div className="flex flex-col gap-[70px]">
            <Hero banner="bg-referral-banner"
                  text="Strive to build strong, mutually beneficial relationships with peoples who share our vision. Whether you're just starting out or you're an experienced professional, we offer a range of partnership."
                  title="We value our partnerships"/>
            <StatusTable/>
            <PartnershipModel/>
            <PartneshipLevels/>
            <Feedback title="Leave your request" children={ <FeedbackForm question="Count of active counts" /> }/>
        </div>
    )
}