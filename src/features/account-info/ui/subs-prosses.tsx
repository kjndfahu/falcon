import {CheckTick, Cross} from "@/shared/ui/icons";
import React from "react";

interface Props {
    item: {
        title: string;
        price?: string;
        scan_speed: string;
        value: {
            name: string;
            value: boolean;
        }[];
    };
}

export const SubsProsses:React.FC<Props> = ({item}) => {
    return (
        <div className="flex flex-col py-[5px] text-[#0A131D]">
            <div className="border-b-[1px] p-1 border-[#CAE8FF]">
                <div className="flex items-center justify-between">
                    Scan speed
                    <div
                        className="bg-[#e1edff] font-normal text-[#0057FF] text-[13px] leading-[18px] p-2 rounded-[15px]">{item.scan_speed}</div>
                </div>
            </div>
            {item.value.map((i, index) => (
                <div key={index}>
                    <div className="border-b-[1px] p-2 border-[#CAE8FF]">
                        <div className="flex items-center justify-between">
                            {i.name}
                            {i.value ? (
                                <CheckTick className="w-[15px] h-[15px]"/>
                            ) : (
                                <Cross className="w-[15px] h-[15px]"/>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}