import React from "react";
import {ConclusionLogo, TetherLogo} from "@/shared/ui/pc-icons";
import {sessionService} from "@/enteties/user/services/session";
import {getUserTransactions} from "@/enteties/user/repositories/user";

export const Transactions: React.FC = async() => {
    const {session} = await sessionService.verifySession()
    const transactions = await getUserTransactions({userId: session.id})


    return (
        <div className="overflow-x-auto rounded-[15px] border-[1px] border-[#BEDAE9] bg-white">
            <div className="border-b-[1px] border-[#BEDAE9] px-[46px] py-[29px] pb-[21px] text-[18px] text-[#101D2C]">History</div>
            <table className="min-w-full table-auto">
                <thead>
                <tr className="border-b-[1px] border-[#BEDAE9] text-left font-normal text-[18px] text-[#4B5167]">
                    <th className="px-[46px] font-normal py-[20px]">Balances</th>
                    <th className="px-[46px] font-normal py-[20px]">Title</th>
                    <th className="px-[46px] font-normal py-[20px]">Deposit/Withdrawal</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((item, index) => (
                    <tr key={index} className="border-b text-[18px]">
                        <td className="px-[46px] font-normal py-[20px]">
                            <div className="flex flex-col leading-4 text-[18px] text-[#101D2C] gap-1">
                                ${item.depositSum}
                                <p className="text-[14px] text-[#4B5167]">${item.depositSum.toFixed(2)} USD</p>
                            </div>
                        </td>
                        <td className="px-[46px] font-normal py-[20px]">
                            <div className="flex items-center gap-3 text-[18px] text-[#101D2C]">
                                <TetherLogo/>
                                <p>{item.system}</p>
                            </div>
                        </td>
                        <td className="px-[46px] font-normal py-[20px]">
                            <div className="flex items-center gap-3 text-[18px] text-[#101D2C]">
                                <ConclusionLogo/>
                                <p>{item.type}</p>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
