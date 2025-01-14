import {FeedbackForm} from "@/shared/ui/feedback-form";
import {Feedback} from "@/shared/ui/feedback";

export const FeedbackWidget = () => {
    return (
        <Feedback title="Feedback" child={ <FeedbackForm telegram_thread={18} question2="Your question" question="Your Contact" /> }/>
    )
}