import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        livvic: ["var(--font-livvic)", "sans-serif"],
        soria: ["var(--font-soria)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;