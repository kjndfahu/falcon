'use client'

import {useState} from "react";

interface Props {
    autorenew: boolean;
}

export const AutoRenewBtn:React.FC<Props> = ({autorenew}) => {
    const [isActive, setIsActive] = useState(autorenew);

    return (
        <div className="flex items-center gap-2 py-[20px] px-[22px] text-[18px] text-[#0057FF] rounded-[15px] bg-[#d1e3ff]">
            Auto Renewals
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isActive}
                    onChange={() => setIsActive(!autorenew)}
                />
                <div
                    className="w-8 h-5 bg-blue-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:after:translate-x-3"></div>
            </label>
        </div>
    )
}