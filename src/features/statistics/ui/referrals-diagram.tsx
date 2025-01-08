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
} from 'chart.js';
import { useEffect, useRef } from 'react';
import {calculateTotalReseller} from "@/features/statistics/actions/calculate-reseller";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

interface Props {
    referralBuys: {
        price: number,
        userId: number | null,
        createdAt: Date
    }[]
}

export const ReferralsDiagram: React.FC<Props> = ({ referralBuys }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);
    const total = calculateTotalReseller(referralBuys)

    useEffect(() => {
        if (!chartRef.current || !tooltipRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        const tooltipEl = tooltipRef.current;

        if (!ctx || !tooltipEl) return;

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const labels = referralBuys.map((item) =>
            new Date(item.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            })
        );
        const data = referralBuys.map((item) => item.price);

        const customTooltip = (context: any) => {
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

            const canvasPosition = chartRef.current.getBoundingClientRect();
            tooltipEl.style.opacity = '1';
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = `${canvasPosition.left + tooltipModel.caretX}px`;
            tooltipEl.style.top = `${canvasPosition.top + tooltipModel.caretY}px`;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.transition = 'opacity 0.2s ease';
        };

        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Sales Price',
                        data,
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
    }, [referralBuys]);

    return (
        <div className="relative w-[90%]">
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
            <p className="pt-10">Общая сумма продаж - {total}$</p>
        </div>
    );
};