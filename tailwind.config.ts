import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#111111",
        sub01: "#555555",
        sub02: "#767676",
        disabled: "#999999",
        white: "#FFFFFF",
        primary: "#12372A",
        secondary01: "#D7B26D",
        secondary02: "#754B42",
        secondary03: "#DBD3D1",
        warning: "#B71C1C",
      },
    },
    fontFamily: {
      PretendardSemibold: ["Pretendard-Semibold"],
      PretendardRegular: ["Pretendard-Regular"],
    },
  },
  plugins: [],
} satisfies Config;
