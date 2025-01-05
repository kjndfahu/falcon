import {ContactBlock} from "@/features/footer/ui/contact-block";
import {FooterInfo} from "@/features/footer/ui/footer-info";

export const Footer = () => {
    return (
        <div className="flex md:gap-0 gap-[25px] md:flex-row flex-col pt-[30px] pb-[27px] border-t-[1px] border-t-[#CAE8FF] md:items-center md:justify-between text-[#67748E] text-[18px] leading-[23px] xl:px-[220px] mdbvp:px-[150px] sm:px-[50px] px-[20px]">
            <ContactBlock/>
            <FooterInfo/>
        </div>
    )
}