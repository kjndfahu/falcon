import React from "react";

interface Props{
    subscriptionCounts:  Record<string, number>;
}

export const SubsModal:React.FC<Props> = ({subscriptionCounts}) => {
    return (
        <div className="max-h-[600px] w-[800px] overflow-y-auto">
            <table className="min-w-full table-auto">
                <thead className="sticky top-0 bg-white">
                <tr className="sml:table-row hidden border-b-[1px] border-[#BEDAE9] text-left font-normal text-[18px] text-[#4B5167]">
                    <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">Type</th>
                    <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">Count</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(subscriptionCounts).map(([type, count]) => (
                    <tr
                        key={type}
                        className="border-b-[1px] border-[#BEDAE9] text-[16px] text-[#4B5167] hover:bg-gray-100"
                    >
                        <td className="mds:px-[46px] sml:px-[20px] px-[5px] py-[15px]">{type}</td>
                        <td className="mds:px-[46px] sml:px-[20px] px-[5px] py-[15px]">{count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}