/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#C1DCDC",
        darkGray: "#1E1E1E",
        lightGray: "#666666",
      },
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      animation: {
        "up-down": "upDown 2s ease-in-out infinite",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
