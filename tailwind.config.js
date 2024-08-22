/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "flowery-bg": "url('/backgrounds/flowery-bg.png')",
        "design-bg": "url('/backgrounds/design-bg.png')",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],

      },
      colors: {
        primaryPurple: "#632A5F",
        textPink: "#DF1683",
        textBlack: "#212121",
      },
    },
  },
  plugins: [],
};
