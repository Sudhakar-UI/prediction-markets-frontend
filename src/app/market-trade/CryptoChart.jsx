"use client";

import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { UnionIcon, ScheduleIcon, ShuffleIcon, SettingsIcon } from "../components/HomeIcons";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler
);

const dataPoints = [
    55, 48, 46, 45, 44, 43, 42, 42, 42, 42, 43, 41, 40, 41,
    55, 56, 58, 35, 52, 48, 50, 47, 45, 20, 18, 15, 15, 15, 15, 15
];

const labels = new Array(dataPoints.length).fill("");

export default function CryptoChart() {
    const data = {
        labels,
        datasets: [
            {
                data: dataPoints,
                borderColor: "#8B5CF6",
                backgroundColor: "transparent",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: (ctx) =>
                    ctx.dataIndex === dataPoints.length - 1 ? 5 : 0,
                pointBackgroundColor: "#8B5CF6",
                pointBorderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#19181B",
                titleColor: "#fff",
                bodyColor: "#fff",
                borderColor: "#333",
                borderWidth: 1,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
            y: {
                position: "right",
                min: 10,
                max: 60,
                ticks: {
                    stepSize: 10,
                    color: "#888",
                    callback: (value) => value + "%",
                },
                grid: {
                    color: "rgba(255,255,255,0.05)",
                },
            },
        },
    };

    return (
        <>
            <div
                style={{
                    background: "#19181B",
                    borderRadius: "12px",
                    width: "100%",
                    height: "270px",
                }}
            >
                <Line data={data} options={options} />


            </div>

            {/* Bottom Info */}

            <div className="crypto-chart-btm">
                <div>
                    <span><UnionIcon color="#BBA6FF" size="14" /> NEW</span>
                    <span>$81,831 Vol.</span>
                    <span><ScheduleIcon color="#74717A" size="14" /> Apr 30, 2026</span>
                </div>


                <div>
                    {["1H", "6H", "1D", "1W", "1M", "ALL"].map((item) => (
                        <span
                            key={item}
                            style={{
                                cursor: "pointer",
                                color: item === "6H" ? "#fff" : "#666",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                    <ShuffleIcon color="#74717A" size="14" />
                    <SettingsIcon color="#74717A" size="14" />
                </div>


            </div>
        </>

    );
}