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
        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",

        "black-1": "var(--black-1)",
        "black-2": "var(--black-2)",
        "black-3": "var(--black-3)",

        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",

        "light-gray-1": "var(--light-gray-1)",
        "light-gray-2": "var(--light-gray-2)",
        "light-gray-3": "var(--light-gray-3)",

        "red-1": "var(--red-1)",
      },
    },
  },
  plugins: [],
};
export default config;
