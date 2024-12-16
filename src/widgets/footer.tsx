import {ContactBlock} from "@/features/footer/ui/contact-block";
import {FooterInfo} from "@/features/footer/ui/footer-info";

export const Footer = () => {
    return (
        <div className="flex pt-[30px] pb-[27px] border-t-[1px] border-t-[#CAE8FF] items-center justify-between text-[#67748E] text-[18px] leading-[23px] px-[220px]">
            <ContactBlock/>
            <FooterInfo/>
        </div>
    )
}