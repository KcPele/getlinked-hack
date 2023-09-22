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
        "contact-left": "assets/image/contact-left-purple.png",
      },
      colors: {
        "p-white": "var(--primary-white)",
        "p-black": "var(--primary-black)",
        "p-pupple": "var(--primary-pupple)",
        "p-mix": "var(--primary-mix)",
        "p-pink": "var(--primary-pink)",
        "s-pink": "var(--secondary-pink)",
        "s-black": "var(--secondary-black)",
        "f-black": "var(--footer-black)",
        "r-primary": "rgba(212, 52, 254, 0.12)",
        "r-secondary": "rgba(255, 38, 185, 0.12)",
      },
      screens: {
        "nav-sc": "864px",
      },
    },
  },
  plugins: [],
};
export default config;
