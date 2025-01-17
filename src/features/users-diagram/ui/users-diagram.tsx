'use client';

import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale } from 'chart.js';
import { useEffect, useRef } from 'react';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);


interface Props {
    users:  {id: number;
        createdAt: Date;
    }[];
}

export const UsersDiagram: React.FC<Props> = ({ users }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current || !tooltipRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        const tooltipEl = tooltipRef.current;

        if (!ctx || !tooltipEl) return;

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const registrationsPerDay: Record<string, number> = {};

        users.forEach((user) => {
            const date = new Date(user.createdAt).toISOString().split('T')[0];
            registrationsPerDay[date] = (registrationsPerDay[date] || 0) + 1;
        });

        const sortedDates = Object.keys(registrationsPerDay).sort(); // Сортируем даты
        const counts = sortedDates.map((date) => registrationsPerDay[date]);

        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: sortedDates,
                datasets: [
                    {
                        label: 'Daily Subscriptions',
                        data: counts,
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
                        enabled: true,
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
    }, [users]);

    return (
        <div className="relative mdbvp:w-[900px] md:w-[700px] w-full">
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
