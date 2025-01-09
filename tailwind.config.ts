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
        brand: {
          BackGround: "#F1F3F5",
          BrandMain: "#073A29",
          BrandSub: "#D7B26D",
          BrandSub2: "#754B42",
        },
        font: {
          MainText: "#111111",
          SubText01: "#505050",
          SubText02: "#767676",
          DisabledText: "#999999",
        },
        system: {
          BackGround: "#F1F3F5",
          Warning: "#B71C1C",
          Etc: "#004DE3",
          Palette01: "#12372A",
          Palette02: "#436850",
          Palette03: "#ADBC9F",
          Palette04: "#D7B26D",
          Palette05: "#ECD79B",
          Palette06: "#DBD3D1",
          Palette07: "#A97D5E",
          Palette08: "#754B42",
        },
      },
    },
    fontFamily: {
      PretendardSemibold: ["Pretendard-Semibold"],
      PretendardRegular: ["Pretendard-Regular"],
    },
  },
  plugins: [],
} satisfies Config;
