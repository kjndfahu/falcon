import {FeedbackForm} from "@/shared/ui/feedback-form";
import {Feedback} from "@/shared/ui/feedback";

export const FeedbackWidget = () => {
    return (
        <Feedback title="Feedback" children={ <FeedbackForm question="Your Contact" /> }/>
    )
}