import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "var(--primary-gradient)",
      },
      colors: {
        "p-white": "var(--primary-white)",
        "p-black": "var(--primary-black)",
        "p-pupple": "var(--primary-pupple)",
        "p-mix": "var(--primary-mix)",
        "s-pink": "var(--secondary-pink)",
      },
    },
  },
  plugins: [],
};
export default config;
