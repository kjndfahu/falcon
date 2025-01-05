import {MailLogo, TelegramLogo} from "@/shared/ui/icons";

export const ContactBlock = () => {
    return (
        <div className="flex xl:gap-[125px] justify-between sm:justify-center sm:gap-[50px]">
            <div className="flex items-center sm:gap-[25px] gap-[10px]">
                <MailLogo/>
                ContactUs@mail.com
            </div>
            <div className="flex items-center sm:gap-[25px] gap-[10px]">
                <TelegramLogo/>
                Telegram
            </div>
        </div>
    )
}