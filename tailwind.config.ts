import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#26C2AE",
          "200": "#5E7A7D",
          "400": "#9FE8DF",
          "500": "#C5E4E7",
          "700": "#9EBBBD",
          "900": "#F3F9FA",
        },
        dark: {
          "300": "#26C2AE",
          "900": "#00474B",
        },

        red: {
          "900": "#E17457",
        },
      },
      boxShadow: {
        "light-100":
          "0px 32px 43px 0 rgba(79,166,175,0.2)",
      },
      screens: {
        xs: "420px",
      },
      fontFamily: {
        space: ["var(--font-space-mono)"],
      },
    },
  },
  // plugins: [
  //   require("tailwindcss-animate"),
  //   require("@tailwindcss/typography"),
  // ],
};

export default config;
