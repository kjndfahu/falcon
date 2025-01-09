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
    ChartOptions,
    TooltipModel,
} from 'chart.js';
import { useEffect, useRef } from 'react';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

export const ReferralDiagram = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current || !tooltipRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        const tooltipEl = tooltipRef.current;

        if (!ctx || !tooltipEl) return;

        // Уничтожаем предыдущий экземпляр графика
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Кастомный tooltip с явным типом
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

            const canvasPosition = chartRef.current?.getBoundingClientRect();
            if (canvasPosition) {
                tooltipEl.style.opacity = '1';
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = `${canvasPosition.left + tooltipModel.caretX - 340}px`;
                tooltipEl.style.top = `${canvasPosition.top + tooltipModel.caretY - 200}px`;
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.transition = 'opacity 0.2s ease';
            }
        };

        // Создание нового экземпляра графика
        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5'],
                datasets: [
                    {
                        label: 'Subscriptions',
                        data: [10, 20, 15, 30, 25],
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
            } as ChartOptions<'line'>,
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="relative mdbvp:w-[643px] sml:w-[450px] w-[300px]">
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
        </div>
    );
};
