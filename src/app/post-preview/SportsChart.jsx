"use client";

import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
);

const labels = [
    "Jan 28", "", "", "Jan 31", "Feb 1",
    "", "Feb 4", "", "", "Feb 7"
];

// Purple line data
const teamAData = [85, 78, 75, 76, 95, 60, 82, 70, 15, 15];

// Gray line data
const teamBData = [70, 82, 65, 66, 72, 45, 88, 90, 88, 88];

export default function SportsChart() {
    const data = {
        labels,
        datasets: [
            {
                label: "Team A",
                data: teamAData,
                borderColor: "#8B5CF6",
                borderWidth: 2,
                tension: 0.35,
                fill: false,
                pointRadius: (ctx) =>
                    ctx.dataIndex === teamAData.length - 1 ? 5 : 0,
                pointBackgroundColor: "#8B5CF6",
            },
            {
                label: "Team B",
                data: teamBData,
                borderColor: "#828282",
                borderWidth: 2,
                tension: 0.35,
                fill: false,
                pointRadius: (ctx) =>
                    ctx.dataIndex === teamBData.length - 1 ? 5 : 0,
                pointBackgroundColor: "#828282",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: "index",
            intersect: false,
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#1F1F23",
                titleColor: "#fff",
                bodyColor: "#fff",
                borderColor: "#333",
                borderWidth: 1,
                callbacks: {
                    label: (context) => `${context.parsed.y}%`,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#666",
                },
            },
            y: {
                position: "right",
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 25,
                    color: "#888",
                    callback: (value) => value + "%",
                },
                grid: {
                    color: "#413F46",
                    borderDash: [3, 3], // Increased dash size for better visibility
                },
                border: {
                    dash: [3, 3], // Added for the axis border if needed (v4 common practice)
                },
            },
        },
    };

    return (
        <div
            style={{
                background: "transparent",
                padding: "0px",
                width: "100%",
                height: "300px",
                marginTop: "20px",
            }}
        >
            <Line data={data} options={options} />
        </div>
    );
}