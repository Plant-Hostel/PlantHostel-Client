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
        BackGround: "#F1F3F5",
        BrandMain: "#073A29",
        BrandSub: "#D7B26D",
        BrandSub2: "#754B42",
      },
    },
  },
  plugins: [],
} satisfies Config;
