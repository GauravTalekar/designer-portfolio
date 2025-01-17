/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bone-white": {
        "50": "#f8f8f8",
        "100": "#efefef",
        "200": "#dcdcdc",
        "300": "#bdbdbd",
        "400": "#989898",
        "500": "#7c7c7c",
        "600": "#656565",
        "700": "#525252",
        "800": "#464646",
        "900": "#3d3d3d",
        "950": "#292929",
    },
    
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        nunito: ["var(--font-nunito-sans)"],
      }
    },
  },
  plugins: [],
};
