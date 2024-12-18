import {FeedbackForm} from "@/shared/ui/feedback-form";
import {Feedback} from "@/shared/ui/feedback";

export const QuestionBlock = () => {
    return (
        <Feedback title="Have another question?" child={ <FeedbackForm question="Contacts for feedback" /> }/>
    )
}