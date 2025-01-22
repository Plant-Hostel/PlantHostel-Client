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
        back: "#F1F3F5",
        warning: "#B71C1C",
        pal01: "#12372A",
        pal02: "#436850",
        pal03: "#ADBC9F",
        pal04: "#D7B26D",
        pal05: "#ECD79B",
        pal06: "#DBD3D1",
        pal07: "#A97D5E",
        pal08: "#754B42",
        stroke: "#DEE3E1",
        whiteTransparent: "rgba(255, 255, 255, 0.15)",
      },
    },
    fontFamily: {
      PretendardSemibold: ["Pretendard-Semibold"],
      PretendardRegular: ["Pretendard-Regular"],
    },
  },
  plugins: [],
} satisfies Config;
