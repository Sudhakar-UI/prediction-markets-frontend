"use client"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Homeheader from "./components/Homeheader";
import Homefooter from "./components/Homefooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="layout">
          <Homeheader />
          <main className="layout-content">
            {children}
          </main>
          <Homefooter />
        </div>
      </body>
    </html>
  );
}