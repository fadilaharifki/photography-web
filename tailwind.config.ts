import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        livvic: ["var(--font-livvic)"],
        soria: ["var(--font-soria)"],
      },
    },
  },
  plugins: [],
};

export default config;