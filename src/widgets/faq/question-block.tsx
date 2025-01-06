import {FeedbackForm} from "@/shared/ui/feedback-form";
import {Feedback} from "@/shared/ui/feedback";

export const QuestionBlock = () => {
    return (
        <Feedback title="Have another question?" child={ <FeedbackForm telegram_thread={2} question="Contacts for feedback" /> }/>
    )
}