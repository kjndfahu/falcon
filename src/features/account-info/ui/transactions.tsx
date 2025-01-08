import React from "react";
import {ConclusionLogo, DepositLogo, TetherLogo} from "@/shared/ui/pc-icons";
import { sessionService } from "@/enteties/user/services/session";
import { getUserTransactions } from "@/enteties/user/repositories/user";
import {formatSystem, formatType} from "@/shared/lib/formats";

export const Transactions: React.FC = async () => {
    const { session } = await sessionService.verifySession();
    const transactions = await getUserTransactions({ userId: session.id });

    return (
        <div className="overflow-x-auto z-[1] rounded-[15px] border-[1px] border-[#BEDAE9] bg-white">
            <div className="sml:flex hidden border-b-[1px] border-[#BEDAE9] mds:px-[46px] px-[20px] py-[29px] pb-[21px] text-[18px] text-[#101D2C]">
                History
            </div>
            <div className="relative">
                <div className="overflow-y-auto max-h-[300px]">
                    <table className="min-w-full table-auto">
                        <thead className="sm:sticky sm:table-header-group hidden top-0 bg-white">
                        <tr className="border-b-[1px] border-[#BEDAE9] text-left font-normal text-[18px] text-[#4B5167]">
                            <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">
                                Balances
                            </th>
                            <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">
                                Title
                            </th>
                            <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">
                                Deposit/Withdrawal
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions.map((item, index) => (
                            <tr key={index} className="border-b sml:text-[18px] text-[16px] text-[#101D2C]">
                                <td className="mds:px-[46px] sml:px-[20px] px-[15px] font-normal py-[20px]">
                                    <div
                                        className="flex sm:flex-col flex-row gap-3 sm:gap-0 sm:order-1 sm:items-start items-center sm:justify-start">
                                        ${item.sum}
                                        <p className="sml:flex hidden text-[14px] text-[#4B5167]">
                                            ${item.sum.toFixed(2)} USD
                                        </p>
                                    </div>
                                </td>
                                <td className="mds:px-[46px] sml:px-[20px] px-[3px] font-normal py-[20px]">
                                    <div
                                        className="flex flex-row sm:gap-3 gap-1 sm:order-3 sm:items-center sm:justify-start">
                                        <TetherLogo/>
                                        <p>{formatSystem(item.system)}</p>
                                    </div>
                                </td>
                                <td className="mds:px-[46px] sml:px-[20px] px-[3px] font-normal py-[20px]">
                                    <div
                                        className="flex flex-row sm:gap-3 gap-1 sm:order-2 sm:items-center sm:justify-start">
                                        {item.type === "WITHDRAW" ? <ConclusionLogo/> : <DepositLogo/>}
                                        <p>{formatType(item.type)}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
