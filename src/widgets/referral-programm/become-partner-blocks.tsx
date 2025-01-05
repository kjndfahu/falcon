import Image from "next/image";
import smile from "@/shared/assets/img/smile.png";
import sphere from "@/shared/assets/img/sphere.png";
import flower from "@/shared/assets/img/flower.png";

export const BecomePartnerBlocks = () => {
    return (
        <div className="flex md:flex-row flex-col items-center xl:gap-[50px] gap-[30px]">
            <div className="flex justify-between relative xl:w-[858px] mdbvp:w-[650px] sml:w-[500px] w-full mdbvp:h-[970px] md:h-[818px] h-[650px] flex-col border-[1px] rounded-[15px] border-[#BEDAE9]">
                <div className="flex flex-col gap-[25px] py-[36px] px-[50px] items-start">
                    <div className="flex flex-col gap-[25px] w-[396px]">
                        <div
                            className="flex w-[42px] text-[22px] h-[42px] items-center p-2 justify-center bg-[#0A131D0D] rounded-[5px] border-[1px] border-[#AFC0D0]">
                            1
                        </div>
                        <div className="flex flex-col gap-[25px]">
                            <h2 className="text-[24px] font-semibold  text-gray-950">
                                Contact the Development Team
                            </h2>
                            <p className="text-[18px] leading-[24px] font-normal text-[#4B5167]">
                                Submit Your Application Reach out to our Development Team directly
                                or leave your contact information by submitting the application
                                form.
                            </p>
                        </div>
                    </div>
                </div>
                <Image className="z-[10] px-[90px]" src={smile} alt="/"/>
                <div
                    className="absolute bottom-0 z-[5] w-full mdbvp:h-[500px] h-[300px] bg-gradient-to-b from-white to-blue-200 rounded-lg shadow-md p-6"></div>
            </div>
            <div className="flex w-full flex-col xl:gap-[50px] gap-[30px]">
                <div className="flex xl:w-[572px] mdbvp:w-[470px] md:w-[400px] sml:w-[500px] w-full items-center relative flex-col border-[1px] rounded-[15px] border-[#BEDAE9]">
                    <div className="flex flex-col mdbvp:gap-[25px] gap-[10px] mdbvp:py-[36px] md:py-[15px] md:pt-0 pt-[51px] items-start">
                        <div className="flex flex-col mdbvp:gap-[25px] gap-[10px] mdbvp:px-0 px-[20px] w-[396px]">
                            <div
                                className="flex w-[42px] text-[22px] h-[42px] items-center p-2 justify-center bg-[#0A131D0D] rounded-[5px] border-[1px] border-[#AFC0D0]">
                                2
                            </div>
                            <div className="flex flex-col mdbvp:gap-[25px] gap-[10px]">
                                <h2 className="text-[24px] font-semibold  text-gray-950">
                                    Get Approved
                                </h2>
                                <p className="text-[18px] leading-[24px] font-normal text-[#4B5167]">
                                    Our team will review your application or reach out to you to find the best
                                    partnership solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="z-[10] " src={sphere} alt="/"/>
                    <div
                        className="absolute bottom-0 z-[5] w-full sml:h-[200px] bg-gradient-to-b from-white to-blue-200 rounded-lg shadow-md p-6"></div>
                </div>
                <div className="flex xl:w-[572px] mdbvp:w-[470px] md:w-[400px] sml:w-[500px] w-full items-center relative flex-col border-[1px] rounded-[15px] border-[#BEDAE9]">
                    <div className="flex flex-col mdbvp:gap-[25px] gap-[10px] mdbvp:py-[36px] py-[15px]  items-start">
                        <div className="flex flex-col mdbvp:gap-[25px] gap-[10px] mdbvp:px-0 px-[20px] w-[396px]">
                            <div
                                className="flex w-[42px] text-[22px] h-[42px] items-center p-2 justify-center bg-[#0A131D0D] rounded-[5px] border-[1px] border-[#AFC0D0]">
                                3
                            </div>
                            <div className="flex flex-col mdbvp:gap-[25px] gap-[10px]">
                                <h2 className="text-[24px] font-semibold  text-gray-950">
                                    Get Approved
                                </h2>
                                <p className="text-[18px] leading-[24px] font-normal text-[#4B5167]">
                                    Our team will review your application or reach out to you to find the best
                                    partnership solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image className="z-[10] " src={flower} alt="/"/>
                    <div
                        className="absolute bottom-0 z-[5] w-full h-[200px] bg-gradient-to-b from-white to-blue-200 rounded-lg shadow-md p-6"></div>
                </div>
            </div>
        </div>
    )
}