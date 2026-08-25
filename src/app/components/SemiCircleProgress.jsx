import React from 'react';

const SemiCircleProgress = ({ percentage }) => {
    // SVG and circle geometry calculations
    const radius = 50;
    // Circumference of a semi-circle is π * r
    const arcLength = Math.PI * radius;
    // Calculate how much of the stroke to hide based on the percentage
    const strokeDashoffset = arcLength - (arcLength * percentage) / 100;

    // Conditional fill color based on percentage
    const getProgressColor = (pct) => {
        if (pct <= 30) return '#ef4444';       // Red
        if (pct <= 60) return '#FFAC1C';       // Yellow
        return '#22c55e';                       // Green
    };

    return (
        <div className="semi-circle-container">
            <svg
                viewBox="0 0 120 70"
                className="semi-circle-svg"
            >
                {/* Background Track */}
                <path
                    d="M 10 60 A 50 50 0 0 1 110 60"
                    className="svg-track"
                />
                {/* CSS3 Animated Progress Bar */}
                <path
                    d="M 10 60 A 50 50 0 0 1 110 60"
                    className="svg-progress"
                    style={{
                        strokeDasharray: arcLength,
                        strokeDashoffset: strokeDashoffset,
                        stroke: getProgressColor(percentage),
                    }}
                />
            </svg>

            {/* Centered Text */}
            <div className="semi-circle-content">
                <span className="percentage-text">{percentage}%</span>
                <span className="label-text">Up</span>
            </div>
        </div>
    );
};

export default SemiCircleProgress;