import {Button} from "@/shared/ui/button";

export const SettingsModal = () => {
    return (
        <div className="flex flex-col text-[#0A131D] gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label>Your email</label>
                <div
                    className="rounded-[15px] w-[528px] border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        name="login"
                        type="login"
                        placeholder="Enter your email"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
            </div>
            <Button title="Next" styles="items-center justify-center py-[18px] rounded-[15px] text-white bg-[#0A131D]"/>
        </div>

    )
}