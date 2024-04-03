import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backGround: "#130338",
        accentSky: "#6DC7FF",
        accentPink: "#E6ABFF",
        accentBlue: "#1A6DFF",
        accentMagenta: "#C822FF",
        textColorLite: "#F0F0F0",
        textColorGray: "#B8B8B8",
      },
    },
  },
  plugins: [],
};
export default config;
