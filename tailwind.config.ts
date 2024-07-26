import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Dark mode primary color
        secondary: "#2d3748", // Dark mode secondary color
        accent: "#4a5568", // Dark mode accent color
        background: "#f7fafc", // Light mode background color
        foreground: "#ffffff", // Light mode foreground color
        grey: "#b3b4b4",
        dark: "#626161",
        light: "#e2e8f0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font family
        serif: ["Merriweather", "serif"], // Custom font family
      },
      borderColor: {
        primary: "#1a202c", // Dark mode border color
        secondary: "#2d3748", // Dark mode border color
        accent: "#4a5568", // Dark mode border color
        grey: "#b3b4b4",
        light: "#e2e8f0",
      },
      spacing: {
        "72": "18rem", // Custom spacing
        "84": "21rem",
        "96": "24rem",
      },
      borderRadius: {
        xl: "1.25rem", // Custom border radius
      },
      height: {
        "10": "2.5rem", // Custom heights
        "12": "3rem", // Custom heights
        "16": "4rem", // Custom heights
        "20": "5rem",
        "24": "6rem",
        "28": "7rem",
        "72": "18rem", // Custom heights
        "128": "32rem", // Custom heights
        "144": "36rem",
        "160": "40rem",
        "half-screen": "50vh", // Half screen height
        "screen-75": "75vh", // 75% of the screen height
      },
      width: {
        "10": "2.5rem", // Custom widths
        "12": "3rem", // Custom widths
        "16": "4rem", // Custom widths
        "20": "5rem",
        "24": "6rem",
        "28": "7rem",
        "40": "10rem",
        "72": "18rem", // Custom widths
        "80": "80%",
        "90": "90%",
      },
    },
  },
  plugins: [],
};
export default config;
