import {CheckTick, Cross} from "@/shared/ui/icons";
import React from "react";

interface Props {
    item: {
        title: string;
        price: string;
        scan_speed: string;
        value: {
            name: string;
            value: boolean;
        }[]
    }
}

export const Prosses:React.FC<Props> = ({item}) => {
    return (
        <div className="flex flex-col py-[25px] text-[#0A131D]">
            <div className="border-b-[1px] p-3 border-[#CAE8FF]">
                <div className="flex items-center justify-between">
                    Scan speed
                    <div
                        className="bg-[#e1edff] font-normal text-[#0057FF] text-[16px] leading-[20px] p-2 rounded-[15px]">{item.scan_speed}</div>
                </div>
            </div>
            {item.value.map((i, index) => (
                <div key={index}>
                    <div className="border-b-[1px] p-3 border-[#CAE8FF]">
                        <div className="flex items-center justify-between">
                            {i.name}
                            {i.value ? (
                                <CheckTick/>
                            ) : (
                                <Cross/>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}