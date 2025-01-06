'use client'

import { useState, useCallback, useTransition } from "react";
import { toggleAutoRenewAction } from "../actions/toggle-autorenew";

interface Props {
    autorenew: boolean;
    trackingNumber: number;
}

export const AutoRenewBtn: React.FC<Props> = ({ autorenew, trackingNumber }) => {
    const [isActive, setIsActive] = useState(autorenew);
    const [isPending, startTransition] = useTransition();
    const [lastToggleTime, setLastToggleTime] = useState(0);
    const DEBOUNCE_DELAY = 2000;

    const handleToggle = useCallback(async () => {
        const currentTime = Date.now();
        
        if (currentTime - lastToggleTime < DEBOUNCE_DELAY) {
            console.log('Please wait before toggling again');
            return;
        }

        setLastToggleTime(currentTime);
        
        startTransition(async () => {
            try {
                const result = await toggleAutoRenewAction(trackingNumber, !isActive);
                
                if (result.success) {
                    setIsActive(!isActive);
                } else if (result.error) {
                    console.error('Toggle error:', result.error);
                }
            } catch (error) {
                console.error('Error toggling auto-renew:', error);
            }
        });
    }, [isActive, trackingNumber, lastToggleTime]);

    return (
        <div className="flex items-center gap-2 py-[20px] px-[22px] text-[18px] text-[#0057FF] rounded-[15px] bg-[#d1e3ff]">
            Auto Renewals
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isActive}
                    onChange={handleToggle}
                    disabled={isPending}
                />
                <div className={`w-8 h-5 bg-blue-200 peer-focus:outline-none rounded-full peer 
                    peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[1px] 
                    after:left-[1px] after:bg-white after:rounded-full after:h-[18px] 
                    after:w-[18px] after:transition-all peer-checked:after:translate-x-3
                    ${isPending ? 'opacity-50' : ''}`}
                ></div>
            </label>
        </div>
    );
};