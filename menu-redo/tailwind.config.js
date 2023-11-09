/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      bgColor: "#FFE4A7",
      bgMenuColor: "#B2533E",
      white: "#FFFFFF",
      darkRed: "#482121",
      orange: "#E8AA42",
      darkOrange: "#E57C23",
      tan: "#FFCC70",
      black: "#000000",
      red: "#FE0000",
      lightOrange: "#FFBB5C",
      brown: "#C38154",
      lightGray: "#F7F5F2",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      roboto: ["Roboto Slab", "serif"],
      arimo: ["Arimo", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      amatic: ["Amatic SC", "sans-serif"],
      dosis: ["Dosis", "sans-serif"],
    },
  },
  plugins: [],
};
