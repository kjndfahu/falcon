import React from "react";
import {ConclusionLogo, TetherLogo} from "@/shared/ui/pc-icons";

interface HistoryItem {
    balance: string;
    usdEquivalent: string;
    title: string;
    icon: React.ReactNode;
    status: string;
    statusColor: string;
    statusIcon: React.ReactNode;
}

const historyData: HistoryItem[] = [
    {
        balance: "0.000000",
        usdEquivalent: "0.000 USD",
        title: "USDT",
        icon: <span>⚔️</span>,
        status: "Conclusion",
        statusColor: "text-pink-500",
        statusIcon: <span>🔗</span>,
    },
    {
        balance: "0.000000",
        usdEquivalent: "0.000 USD",
        title: "Visa",
        icon: <span>💳</span>,
        status: "Replenished",
        statusColor: "text-blue-500",
        statusIcon: <span>🔄</span>,
    },
];

export const Transactions: React.FC = () => {
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
                    <tr className="border-b text-[18px]">
                        <td className="px-[46px] font-normal py-[20px]">
                            <div className="flex flex-col leading-4 text-[18px] text-[#101D2C] gap-1">
                                0.000000
                                <p className="text-[14px] text-[#4B5167]">0.000 USD</p>
                            </div>
                        </td>
                        <td className="px-[46px] font-normal py-[20px]">
                            <div className="flex items-center gap-3 text-[18px] text-[#101D2C]">
                                <TetherLogo/>
                                <p>USDT</p>
                            </div>
                        </td>
                        <td className="px-[46px] font-normal py-[20px]">
                            <div className="flex items-center gap-3 text-[18px] text-[#101D2C]">
                                <ConclusionLogo/>
                                <p>Withdraw</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
