/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1E40AF",
        customGreen: "#10B981",
        mainColor: "#333e6d",
        mainColorHover: "#4e62a1",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
