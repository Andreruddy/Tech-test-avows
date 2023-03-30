/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#007500",
        dark: "#0f172a",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};
