/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        teal: "#006454",
        lime: "#A7C637",
        "light-gray": "#F1F1F1",
      },
    },
  },
  plugins: [],
};
