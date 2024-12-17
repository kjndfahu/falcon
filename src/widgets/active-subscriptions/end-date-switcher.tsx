'use client'
import {useState} from "react";

export const EndDateSwitcher = () => {
    const [isActive, setIsActive] = useState(true);
    return (
        <div
            className="flex items-center justify-between rounded-[15px] border-[1px] w-[548px] border-[#CCE5F8] py-4 px-[50px] bg-[#F6FCFF]">
            <div className="flex flex-col gap-1 text-[18px] text-[#0A131D]">
                End Date Tariff
                <p className="text-[14px] text-[#4B5167]">Activate for sorting</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isActive}
                    onChange={() => setIsActive(!isActive)}
                />
                <div
                    className="w-8 h-5 bg-blue-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:after:translate-x-3"></div>
            </label>
        </div>
    )
}