/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        darkColor: "var(--clr-dark)",
        slateColor: "var(--clr-slate)",
        orangeColor: "var(--clr-orange)",
      },
      fontSize: {
        healding1: "var(--res-fnt-size:)",
      },
    },
  },
  plugins: [],
};
