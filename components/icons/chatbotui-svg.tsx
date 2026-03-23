import { FC } from "react"

interface AKChatSVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const ChatbotUISVG: FC<AKChatSVGProps> = ({ theme, scale = 1 }) => {
  const color = theme === "dark" ? "#fff" : "#0d0d1a"
  const accent = "#7c3aed"
  return (
    <svg
      width={64 * scale}
      height={64 * scale}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="52" height="44" rx="14" fill={accent} />
      <path d="M14 46 L8 58 L26 48Z" fill={accent} />
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
      <circle cx="58" cy="8" r="5" fill="#a78bfa" />
    </svg>
  )
}
