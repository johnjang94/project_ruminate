/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#1f271b",
        "brand-blue": "#02819e",
        "brand-brown": "#38342a",
        "brand-green": "#0f7b41",
        "brand-yellow": "#ffba49",
      },
    },
  },
  plugins: [],
  fonts: {
    manrope: ["Manrope", "sans-serif"],
  },
};
