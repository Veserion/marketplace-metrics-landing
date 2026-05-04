import React from 'react';

export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="22" fill="url(#logo-grad)" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
      </defs>
      {/* Chart axes — L shape */}
      <path
        d="M18 78 L18 22"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M18 78 L82 78"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* M-shaped chart line */}
      <path
        d="M18 65 L35 38 L50 55 L65 28 L82 48"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}