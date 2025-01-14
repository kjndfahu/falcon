import {Hero} from "@/shared/ui/hero";
import {StatusTable} from "@/widgets/referral-programm/status-table";
import {PartnershipModel} from "@/widgets/referral-programm/partnership-model";
import {FeedbackForm} from "@/shared/ui/feedback-form";
import {Feedback} from "@/shared/ui/feedback";
import {PartneshipLevels} from "@/widgets/referral-programm/partneship-levels";
import {BecomePartner} from "@/widgets/referral-programm/become-partner";
import {StatusTableAdaptive} from "@/widgets/referral-programm/status-table-adaptive";

export default function ReferralProgramPage() {
    return (
        <div className="flex flex-col gap-[70px]">
            <Hero banner="bg-referral-program"
                  text="Strive to build strong, mutually beneficial relationships with peoples who share our vision. Whether you're just starting out or you're an experienced professional, we offer a range of partnership."
                  title="We value our partnerships"/>
            <StatusTable/>
            <StatusTableAdaptive/>
            <PartnershipModel/>
            <PartneshipLevels/>
            <BecomePartner/>
            <Feedback title="Leave your request" child={ <FeedbackForm telegram_thread={23} question2="Contact Information" question="Count of active counts" /> }/>
        </div>
    )
}