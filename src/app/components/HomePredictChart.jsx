"use client";

import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
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
    "Jan 10", "Jan 15", "Jan 20", "Jan 25",
    "Feb 1", "Feb 8", "Feb 15", "Feb 22",
    "Mar 1", "Mar 5", "Mar 8"
];

const data = {
    labels,
    datasets: [
        {
            label: "December 31 59%",
            data: [null, null, null, null, null, null, 50, 30, 40, 60, 59],
            borderColor: "#9EC9FF",
            borderWidth: 2,
            tension: 0.35,
            pointRadius: ctx => ctx.dataIndex === 10 ? 5 : 0,
            pointBackgroundColor: "#9EC9FF"
        },
        {
            label: "March 31 30%",
            data: [25, 18, 22, 20, 14, 12, 18, 20, 25, 45, 30],
            borderColor: "#2EA8FF",
            borderWidth: 2,
            tension: 0.35,
            pointRadius: ctx => ctx.dataIndex === 10 ? 5 : 0,
            pointBackgroundColor: "#2EA8FF"
        },
        {
            label: "March 14 13%",
            data: [null, null, null, null, null, null, null, null, 40, 18, 13],
            borderColor: "#F4C542",
            borderWidth: 2,
            tension: 0.35,
            pointRadius: ctx => ctx.dataIndex === 10 ? 5 : 0,
            pointBackgroundColor: "#F4C542"
        }
    ]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
        mode: "index",
        intersect: false
    },

    plugins: {
        legend: {
            display: false
        },

        tooltip: {
            backgroundColor: "#111827",
            borderColor: "#374151",
            borderWidth: 1,
            titleColor: "#fff",
            bodyColor: "#fff",
            callbacks: {
                label: ctx => `${ctx.dataset.label}`
            }
        }
    },

    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                color: "#6b7280"
            }
        },

        y: {
            position: "right",
            min: 0,
            max: 70,

            ticks: {
                stepSize: 15,
                color: "#9ca3af",
                callback: v => v + "%"
            },

            grid: {
                color: "rgba(255,255,255,0.08)",
                borderDash: [4, 4]
            }
        }
    }
};


const HomePredictChart = React.memo(function HomePredictChart() {
    return (
        <div
            style={{
                height: "330px",
                width: "100%",
                padding: "10px"
            }}
        >
            <Line data={data} options={options} />
        </div>
    )
})

export default HomePredictChart