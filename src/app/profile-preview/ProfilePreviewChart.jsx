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

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler
);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

// Mock data roughly matching the shape of the line in the screenshot
const dataPoints = [
    10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 6, 6, 6, 6, 6, 6, 6, 8, 12, 12, 12, 12, 12, 12, 18, 19, 26, 27
];

const labels = new Array(dataPoints.length).fill("");

const ProfilePreviewChart = () => {

    const data = {
        labels,
        datasets: [
            {
                data: dataPoints,
                borderColor: "#8B5CF6", // Purple line
                backgroundColor: "transparent",
                borderWidth: 2,
                fill: false, // Removed the fill to match the screenshot
                tension: 0.4, // Keeps the smooth curves between flat points
                pointRadius: 0, // Hides all points
                pointHoverRadius: 0, // Prevents points from showing on hover
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: false, // Disabled tooltip to keep it strictly visual, enable if needed
            },
        },
        scales: {
            x: {
                display: false, // Completely hides the X-axis
            },
            y: {
                display: false, // Completely hides the Y-axis and grid lines
                min: 0,
                max: 35, // Adjusted to give the chart some vertical breathing room
            },
        },
        layout: {
            padding: {
                left: -10,
                right: -10,
                bottom: -10, // Removes default padding so the line stretches to the edges if needed
            }
        }
    };

    return (
        <div
            style={{
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            <div className="d-flex justify-content-between align-items-center">
                <div className="preview-graph-up">
                    <FontAwesomeIcon icon={faCaretUp} color="#34C759" />
                    <span>Profit/Loss</span>
                </div>
                <div className="d-flex gap-2">
                    {["1D", "1W", "1M", "ALL"].map((item) => (
                        <span
                            key={item}
                            style={{
                                fontSize: "14px",
                                cursor: "pointer",
                                color: item === "1D" ? "#fff" : "#666",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Top Info Header */}
            <div>
                <h1 style={{
                    color: "#FFFFFF",
                    fontSize: "28px",
                    fontWeight: "500",
                    marginTop: "16px",
                }}>
                    $5,711,460.00
                </h1>
                <span style={{
                    color: "#888888",
                    fontSize: "14px",
                }}>
                    Past Month
                </span>
            </div>

            {/* Chart Container */}
            <div style={{ height: "140px", width: "100%" }}>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default ProfilePreviewChart