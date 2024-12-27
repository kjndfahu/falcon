import {SupportBlock} from "@/features/contact-us/ui/support-block";
import {EmailBlock} from "@/features/contact-us/ui/email-block";
import {TelegramBlock} from "@/features/contact-us/ui/telegram-block";
import {supportInfo} from "@/features/contact-us/model/constants";

export const ContactsBlock = () => {
    return (
        <div className="flex items-center md:flex-row flex-col mdbvp:gap-[40px] gap-[15px] xl:px-[220px] mdbvp:px-[100px] px-[20px]">
            {supportInfo.map((item) => (
                <div key={item.name} className="flex flex-col gap-6 bg-[#F6FCFF] rounded-[15px] border-[1px] p-6 border-[#BEDAE9] w-[467px]">
                    <SupportBlock title={item.name} text={item.time}/>
                    <EmailBlock example={item.gmail}/>
                    <TelegramBlock example={item.telegram}/>
                </div>
            ))}
        </div>
    )
}