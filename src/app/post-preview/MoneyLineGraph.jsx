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

const labels = ["12:00 PM", "", "", "", "", "05:00 PM"];

const data = {
    labels,
    datasets: [
        {
            label: "Real Betis Balompié 100.0%",
            data: [75, 75, 75, 75, 75, 75],
            borderColor: "#9CA3AF",
            borderWidth: 2,
            tension: 0,
            fill: false,
            pointRadius: (ctx) =>
                ctx.dataIndex === 5 ? 5 : 0,
            pointBackgroundColor: "#9CA3AF",
        },
        {
            label: "Club Atlético de Madrid <1%",
            data: [5, 5, 5, 5, 5, 5],
            borderColor: "#8B5CF6",
            borderWidth: 2,
            tension: 0,
            fill: false,
            pointRadius: (ctx) =>
                ctx.dataIndex === 5 ? 5 : 0,
            pointBackgroundColor: "#8B5CF6",
        }
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
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: "#1F1F23",
            titleColor: "#fff",
            bodyColor: "#fff",
            borderColor: "#333",
            borderWidth: 1,
            callbacks: {
                label: (context) => `${context.dataset.label}`,
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
                borderDash: [3, 3],
            },
            border: {
                dash: [3, 3],
            },
        },
    },
};

export default function MoneyLineGraph() {
    return (
        <div>
            <div className="moneyline-legend mt-4 mb-3">
                <div className="d-flex align-items-center gap-2">
                    <span></span>
                    <label>Real Betis Balompié 100.0%</label>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <span></span>
                    <label>Club Atlético de Madrid &lt;1%</label>
                </div>
            </div>
            <div
                style={{
                    background: "transparent",
                    padding: "0px",
                    width: "100%",
                    height: "280px",
                }}
            >
                <Line data={data} options={options} />
            </div>

        </div>
    );
}