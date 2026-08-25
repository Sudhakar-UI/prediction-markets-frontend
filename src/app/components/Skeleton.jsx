import React from 'react';

export default function Skeleton({
    width = "100%",
    height = "1em",
    className = "",
    variant = "",   // "text" | "title" | "avatar" | "btn" | "card"
    style = {}
}) {
    return (
        <span
            className={`skeleton ${variant ? `skeleton-${variant}` : ""} ${className}`}
            style={{ width, height, display: "block", ...style }}
            aria-hidden="true"
        />
    );
}