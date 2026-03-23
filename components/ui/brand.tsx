"use client"

import { FC } from "react"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <div className="flex cursor-default flex-col items-center">
      <div className="mb-3">
        <AKChatSVG theme={theme} />
      </div>
      <div className="text-4xl font-bold tracking-wide">AK Chat</div>
      <div className="mt-1 text-xs font-medium opacity-50 tracking-widest uppercase">
        by aakashsapkotaa
      </div>
    </div>
  )
}

const AKChatSVG: FC<{ theme: "dark" | "light" }> = ({ theme }) => {
  const color = theme === "dark" ? "#fff" : "#0d0d1a"
  const accent = "#7c3aed"
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded chat bubble */}
      <rect x="2" y="2" width="52" height="44" rx="14" fill={accent} />
      {/* Tail */}
      <path d="M14 46 L8 58 L26 48Z" fill={accent} />
      {/* "AK" letters */}
      <text
        x="27"
        y="31"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill={color}
      >
        AK
      </text>
      {/* Spark dot */}
      <circle cx="58" cy="8" r="5" fill="#a78bfa" />
    </svg>
  )
}
