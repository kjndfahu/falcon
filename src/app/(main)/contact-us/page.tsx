import { FeedbackWidget} from "@/widgets/contact-us/feedback-widget";
import {ContactsBlock} from "@/features/contact-us/ui/contacts-block";
import {Hero} from "@/shared/ui/hero";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col sml:gap-[70px] gap-[20px]">
            <Hero banner="bg-contact-banner " title="Contact Us" />
            <ContactsBlock/>
            <FeedbackWidget/>
        </div>
    )
}