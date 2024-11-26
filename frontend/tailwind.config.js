/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#15B392",
        secondary: "#919191",
        white: "#fff",
        placeholder: "#1e1e1e",
        red: "#FF204E",
        block: "#171717",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      transitionProperty: {
        DEFAULT: "color",
      },
      transitionDuration: {
        DEFAULT: "100ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
