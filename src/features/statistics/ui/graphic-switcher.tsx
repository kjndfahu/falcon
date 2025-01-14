'use client';

import { Dispatch, SetStateAction } from "react";

interface Props {
    graphic: string;
    setGraphic: Dispatch<SetStateAction<string>>;
    dateFilter: "all" | "month" | "30days" | { start: Date; end: Date };
    setDateFilter: Dispatch<SetStateAction<"all" | "month" | "30days" | { start: Date; end: Date }>>;
}

export const GraphicSwitcher: React.FC<Props> = ({ graphic, setGraphic, dateFilter, setDateFilter }) => {
    const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        if (value === "all" || value === "month" || value === "30days") {
            setDateFilter(value);
        } else if (value === "custom") {
            setDateFilter({
                start: new Date(),
                end: new Date(),
            });
        }
    };

    return (
        <div className="flex text-[18px] sm:gap-[20px] gap-1 items-center">
            <select
                value={graphic}
                onChange={(e) => setGraphic(e.target.value)}
                className="border rounded-md p-2"
            >
                <option value="Sells">Продажи</option>
                <option value="Resellers">Реселлеры</option>
                <option value="Referrals">Рефералы</option>
            </select>

            <select
                value={typeof dateFilter === "string" ? dateFilter : "custom"}
                onChange={handleDateChange}
                className="border rounded-md p-2"
            >
                <option value="all">За всё время</option>
                <option value="month">Этот месяц</option>
                <option value="30days">Последние 30 дней</option>
                <option value="custom">Выбрать период</option>
            </select>

            {typeof dateFilter === "object" && dateFilter !== null && (
                <div className="flex gap-2">
                    <input
                        type="date"
                        value={dateFilter.start.toISOString().slice(0, 10)}
                        onChange={(e) =>
                            setDateFilter({
                                ...dateFilter,
                                start: new Date(e.target.value),
                            })
                        }
                        className="border rounded-md p-2"
                    />
                    <input
                        type="date"
                        value={dateFilter.end.toISOString().slice(0, 10)}
                        onChange={(e) =>
                            setDateFilter({
                                ...dateFilter,
                                end: new Date(e.target.value),
                            })
                        }
                        className="border rounded-md p-2"
                    />
                </div>
            )}
        </div>
    );
};
