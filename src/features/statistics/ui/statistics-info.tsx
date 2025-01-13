'use client';

import { useState } from "react";
import { StatisticsDiagram } from "@/features/statistics/ui/statistics-diagram";
import { GraphicSwitcher } from "@/features/statistics/ui/graphic-switcher";
import { ResellerSellsDiagram } from "@/features/statistics/ui/resellers-sels-diagram";
import { ReferralsDiagram } from "@/features/statistics/ui/referrals-diagram";

interface Props {
    sells: { price: number; createdAt: Date }[];
    resellerSells: { price: number; userId: number | null; createdAt: Date }[];
    referralBuys: { price: number; userId: number; createdAt: Date }[]; // Обновили тип userId на обязательный
}

export const StatisticsInfo: React.FC<Props> = ({ sells, resellerSells, referralBuys }) => {
    const [graphic, setGraphic] = useState("Sells");
    const [dateFilter, setDateFilter] = useState<"all" | "month" | "30days" | { start: Date; end: Date }>("all");

    const filterData = (data: { price: number; createdAt: Date }[]) => {
        const now = new Date();

        if (dateFilter === "all") return data;

        if (dateFilter === "month") {
            return data.filter((item) => {
                const itemDate = new Date(item.createdAt);
                return (
                    itemDate.getFullYear() === now.getFullYear() &&
                    itemDate.getMonth() === now.getMonth()
                );
            });
        }

        if (dateFilter === "30days") {
            const thirtyDaysAgo = new Date(now);
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            return data.filter((item) => new Date(item.createdAt) >= thirtyDaysAgo);
        }

        if (typeof dateFilter === "object") {
            return data.filter((item) => {
                const itemDate = new Date(item.createdAt);
                return itemDate >= dateFilter.start && itemDate <= dateFilter.end;
            });
        }

        return data;
    };

    const filterResellerSells = (data: { price: number; userId: number | null; createdAt: Date }[]) => {
        const now = new Date();

        if (dateFilter === "all") return data.map((item) => ({
            ...item,
            userId: item.userId ?? 0,
        }));

        if (dateFilter === "month") {
            return data
                .filter((item) => {
                    const itemDate = new Date(item.createdAt);
                    return (
                        itemDate.getFullYear() === now.getFullYear() &&
                        itemDate.getMonth() === now.getMonth()
                    );
                })
                .map((item) => ({
                    ...item,
                    userId: item.userId ?? 0,
                }));
        }

        if (dateFilter === "30days") {
            const thirtyDaysAgo = new Date(now);
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            return data
                .filter((item) => new Date(item.createdAt) >= thirtyDaysAgo)
                .map((item) => ({
                    ...item,
                    userId: item.userId ?? 0,
                }));
        }

        if (typeof dateFilter === "object") {
            return data
                .filter((item) => {
                    const itemDate = new Date(item.createdAt);
                    return itemDate >= dateFilter.start && itemDate <= dateFilter.end;
                })
                .map((item) => ({
                    ...item,
                    userId: item.userId ?? 0,
                }));
        }

        return data;
    };


    const filterReferralBuys = (data: { price: number; userId: number; createdAt: Date }[]) => {
        const now = new Date();

        if (dateFilter === "all") return data;

        if (dateFilter === "month") {
            return data.filter((item) => {
                const itemDate = new Date(item.createdAt);
                return (
                    itemDate.getFullYear() === now.getFullYear() &&
                    itemDate.getMonth() === now.getMonth()
                );
            });
        }

        if (dateFilter === "30days") {
            const thirtyDaysAgo = new Date(now);
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            return data.filter((item) => new Date(item.createdAt) >= thirtyDaysAgo);
        }

        if (typeof dateFilter === "object") {
            return data.filter((item) => {
                const itemDate = new Date(item.createdAt);
                return itemDate >= dateFilter.start && itemDate <= dateFilter.end;
            });
        }

        return data;
    };

    const filteredSells = filterData(sells);
    const filteredResellerSells = filterResellerSells(resellerSells);
    const filteredReferralBuys = filterReferralBuys(referralBuys);

    return (
        <div className="flex flex-col text-[25px] text-black font-semibold w-full gap-[50px]">
            <div className="flex mds:flex-row flex-col items-center gap-[50px]">
                <h3>Статистика</h3>
                <GraphicSwitcher
                    graphic={graphic}
                    setGraphic={setGraphic}
                    dateFilter={dateFilter}
                    setDateFilter={setDateFilter}
                />
            </div>

            {graphic === "Sells" && <StatisticsDiagram sells={filteredSells} />}
            {graphic === "Resellers" && <ResellerSellsDiagram resellerSells={filteredResellerSells} />}
            {graphic === "Referrals" && <ReferralsDiagram referralBuys={filteredReferralBuys} />}
        </div>
    );
};
