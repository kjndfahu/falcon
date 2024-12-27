import {MailLogo, TelegramLogo} from "@/shared/ui/icons";

export const ContactBlock = () => {
    return (
        <div className="flex xl:gap-[125px] gap-[50px]">
            <div className="flex items-center gap-[25px]">
                <MailLogo/>
                ContactUs@mail.com
            </div>
            <div className="flex items-center gap-[25px]">
                <TelegramLogo/>
                Telegram
            </div>
        </div>
    )
}