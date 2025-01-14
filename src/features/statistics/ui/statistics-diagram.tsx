'use client';

import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    CategoryScale,
    TooltipModel,
    ChartTypeRegistry,
    Point,
    BubbleDataPoint
} from 'chart.js';
import {useEffect, useRef, useState} from 'react';
import {calculateTotalPrice} from "@/features/statistics/actions/calculate-price";
import {getUserSellsAction} from "@/features/statistics/actions/get-user-sells-action";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

interface Props {
    sells: {
        price: number;
        createdAt: Date;
    }[];
}

type SellsData = Props['sells'];

export const StatisticsDiagram: React.FC<Props> = ({ sells }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const chartInstanceRef = useRef<Chart<keyof ChartTypeRegistry, (number | [number, number] | Point | BubbleDataPoint)[], unknown> | null>(null);
    const total = calculateTotalPrice(sells)
    const [email, setEmail] = useState('');
    const [userSells, setUserSells] = useState<SellsData | null>(null);

    useEffect(() => {
        if (!chartRef.current || !tooltipRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        const tooltipEl = tooltipRef.current;

        if (!ctx || !tooltipEl) return;

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const dataToUse = email && userSells ? userSells : sells;
        const groupedData = dataToUse.reduce((acc: Record<string, number>, sell) => {
            const date = new Date(sell.createdAt).toLocaleDateString();
            acc[date] = (acc[date] || 0) + sell.price;
            return acc;
        }, {} as Record<string, number>);

        const labels = Object.keys(groupedData);
        const data = Object.values(groupedData);

        const customTooltip = (context: { tooltip: TooltipModel<'line'> }) => {
            const tooltipModel = context.tooltip;

            if (!tooltipModel.opacity) {
                tooltipEl.style.opacity = '0';
                return;
            }

            if (tooltipModel.body) {
                const title = tooltipModel.title[0] || '';
                const value = tooltipModel.body[0]?.lines[0] || '';
                tooltipEl.innerHTML = `
                    <div style="font-size: 16px; font-weight: bold; color: #3b82f6;">
                        ${title}
                    </div>
                    <div style="font-size: 14px; color: #374151;">
                        ${value}
                    </div>
                `;
            }

            const canvasPosition = chartRef.current!.getBoundingClientRect();
            tooltipEl.style.opacity = '1';
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = `${canvasPosition.left + tooltipModel.caretX - 340}px`;
            tooltipEl.style.top = `${canvasPosition.top + tooltipModel.caretY - 200}px`;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.transition = 'opacity 0.2s ease';
        };

        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Total Sales by Day',
                        data: data,
                        borderColor: '#3b82f6',
                        borderWidth: 2,
                        pointBackgroundColor: '#3b82f6',
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        tension: 0.4,
                        fill: 'start',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        enabled: false,
                        external: customTooltip,
                    },
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            drawOnChartArea: false,
                        },
                        border: {
                            display: true,
                            color: '#e5e7eb',
                        },
                    },
                    y: {
                        display: true,
                        grid: {
                            drawTicks: false,
                            color: () => 'transparent',
                        },
                        border: {
                            display: false,
                        },
                    },
                },
            },
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [sells, email, userSells]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSearchClick = async () => {
        if (!email.trim()) {
            setUserSells(null);
            return;
        }

        try {
            const result = await getUserSellsAction(email);
            if (typeof result === 'string') {
                console.error(result);
                setUserSells(null);
            } else {
                setUserSells(result);
            }
        } catch (error) {
            console.error('Error fetching user sells:', error);
            setUserSells(null);
        }
    };

    return (
        <div className="relative w-[90%]">
            <div className="flex flex-col mb-5 text-[18px] ">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Введите email пользователя"
                    className="px-4 py-[10px] font-normal mb-5 w-[300px] border border-blue-500 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div 
                    onClick={handleSearchClick} 
                    className="flex items-center cursor-pointer justify-center font-normal py-[10px] mb-5 text-white w-[250px] bg-blue-500 rounded-[10px]"
                >
                    Найти пользователя
                </div>
            </div>
            <canvas ref={chartRef} className="w-[1000px]"></canvas>
            <div
                ref={tooltipRef}
                className="absolute bg-white shadow-lg rounded-lg p-2 text-sm text-gray-700"
                style={{
                    opacity: 0,
                    pointerEvents: 'none',
                    border: '1px solid #3b82f6',
                    borderRadius: '8px',
                    padding: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            ></div>
            <p className="pt-10">Общая сумма продаж - {email && userSells ? calculateTotalPrice(userSells) : total}$</p>

        </div>
    );
};