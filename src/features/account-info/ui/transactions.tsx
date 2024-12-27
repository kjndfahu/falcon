import React from "react";
import {ConclusionLogo, TetherLogo} from "@/shared/ui/pc-icons";
import {sessionService} from "@/enteties/user/services/session";
import {getUserTransactions} from "@/enteties/user/repositories/user";

export const Transactions: React.FC = async() => {
    const {session} = await sessionService.verifySession()
    const transactions = await getUserTransactions({userId: session.id})


    return (
        <div className="overflow-x-auto rounded-[15px] border-[1px] border-[#BEDAE9] bg-white">
            <div className="sml:flex hidden border-b-[1px] border-[#BEDAE9] mds:px-[46px] px-[20px] py-[29px] pb-[21px] text-[18px] text-[#101D2C]">History</div>
            <table className="min-w-full table-auto">
                <thead>
                <tr className="sml:table-row hidden border-b-[1px] border-[#BEDAE9] text-left font-normal text-[18px] text-[#4B5167]">
                    <th className=" mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">Balances</th>
                    <th className=" mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">Title</th>
                    <th className="  mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">Deposit/Withdrawal</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((item, index) => (
                    <tr key={index} className="border-b text-[18px]">
                        <td className="mds:px-[46px] sm:px-[18px] px-[5px] font-normal py-[20px]">
                            <div className="flex flex-col leading-4 text-[18px] text-[#101D2C] gap-1">
                                ${item.depositSum}
                                <p className="sml:flex hidden text-[14px] text-[#4B5167]">${item.depositSum.toFixed(2)} USD</p>
                            </div>
                        </td>
                        <td className="mds:px-[46px] sm:px-[18px] px-[5px] font-normal py-[20px]">
                            <div className="flex items-center sm:gap-3 gap-1 text-[18px] text-[#101D2C]">
                                <TetherLogo/>
                                <p>{item.system}</p>
                            </div>
                        </td>
                        <td className="mds:px-[46px] sm:px-[18px] px-[5px] font-normal py-[20px]">
                            <div className="flex items-center sm:gap-3 gap-1 text-[18px] text-[#101D2C]">
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
