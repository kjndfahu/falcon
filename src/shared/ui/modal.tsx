import {XLogo} from "@/shared/ui/pc-icons";
import {BlueBtn} from "@/shared/ui/blue-btn";

export const Modal = () => {
    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-[25px] p-[25px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]">
                <div className="flex w-full items-center justify-between text-[#0A131D] leading-[30px] font-semibold text-[32px]">
                    Deposit
                    <XLogo/>
                </div>
                <div className="flex gap-[25px]">
                    <div className="flex flex-col w-[242px] rounded-[15px] gap-[37px] bg-[linear-gradient(113.87deg,_#212121_2.05%,_#393939_97.95%)] text-white text-[16px] px-[25px] py-[28px]">
                        Balance
                        <h3 className="text-[42px] leading-[44px] font-semibold">
                            $100.00
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center gap-[25px] text-black font-medium text-[16px] rounded-[15px] border-[1px] border-[#BEDAE9] px-[25px] bg-[#F3F8FD]">
                        <h3>Account replenishment</h3>
                        <div className="flex gap-[25px]">
                            <div className="border-[1px] w-[309px] px-[16px] py-[19px] text-[18px] leading-[22px] rounded-[15px] border-[#DDE6EF]">
                                <input placeholder="$ 5.00" className="bg-transparent w-full focus:outline-none focus:ring-0" type="text"/>
                            </div>
                            <BlueBtn title="Payment" styles="w-[215px]"/>
                        </div>
                    </div>
                </div>
                <div className="flex w-full gap-[25px] flex-col py-[18px] px-[25px] text-black font-medium text-[16px] border-[1px] rounded-[15px] border-[#BEDAE9]">
                    <h3>Select a payment method</h3>
                    <div className="flex gap-[25px]">
                        <div
                            className="flex items-center bg-[#212121] justify-center text-white rounded-[15px] text-[18px] font-semibold w-[106px] h-[72px]">
                            PAYEER
                        </div>
                        <div className="flex items-center bg-[#0057FF] justify-center text-white rounded-[15px] text-[18px] font-semibold w-[106px] h-[72px]">
                            CRYPTO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};