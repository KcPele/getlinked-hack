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
        "p-gradient": "var(--primary-gradient)",
        "nav-gradient": "linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%)",
      },
      colors: {
        "p-white": "var(--primary-white)",
        "p-black": "var(--primary-black)",
        "p-pupple": "var(--primary-pupple)",
        "p-mix": "var(--primary-mix)",
        "s-pink": "var(--secondary-pink)",
        "s-black": "var(--secondary-black)",
        "f-black": "var(--footer-black)",
      },
      screens: {
        "nav-sc": "864px",
      },
    },
  },
  plugins: [],
};
export default config;
