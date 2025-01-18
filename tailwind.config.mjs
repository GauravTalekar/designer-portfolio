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
        "shark": {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#212121",
        },
        "cerise": {
          "50": "#fef1f9",
          "100": "#fee5f5",
          "200": "#ffcbed",
          "300": "#ffa1dc",
          "400": "#ff67c1",
          "500": "#fa3aa7",
          "600": "#ec2e90",
          "700": "#cc0a69",
          "800": "#a80c56",
          "900": "#8c0f4a",
          "950": "#560129",
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
