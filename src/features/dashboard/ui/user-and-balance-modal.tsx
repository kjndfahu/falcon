import React from "react";

interface Props{
    userAndBalance: {
        id: number;
        balance: number;
    }[];
}

export const UserAndBalanceModal:React.FC<Props> = ({userAndBalance}) => {
    return (
        <div className="max-h-[600px] w-[800px] overflow-y-auto">
            <table className="min-w-full table-auto">
                <thead className="sticky top-0 bg-white">
                    <tr className="sml:table-row hidden border-b-[1px] border-[#BEDAE9] text-left font-normal text-[18px] text-[#4B5167]">
                        <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">ID</th>
                        <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {userAndBalance?.slice(0, 15).map((item, index) => (
                        <tr key={index} className="border-b text-[18px]">
                            <td className="mds:px-[46px] sm:px-[18px] px-[5px] font-normal py-[20px]">
                                <div className="flex flex-col leading-4 text-[18px] text-[#101D2C] gap-1">
                                    #{item.id}
                                </div>
                            </td>
                            <td className="mds:px-[46px] sm:px-[18px] px-[5px] font-normal py-[20px]">
                                <div className="flex items-center sm:gap-3 gap-1 text-[18px] text-[#101D2C]">
                                    <p>{item.balance}$</p>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};