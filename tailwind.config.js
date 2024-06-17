/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  // dynamic colorschemes are incompatible with tailwind's purging; we have to allow some classes to be pre-compiled
  // TODO: is there no way for compilation to be on the fly?
  safelist: [
    {
      pattern: /bg-nord-.+/,
    },
    {
      pattern: /bg-gruvbox-.+/,
    },
    {
      pattern: /text-nord-.+/,
    },
    {
      pattern: /text-gruvbox-.+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        nord: {
          bg: "#2E3440",
          "text-header": "#FFFFFF",
          text: "#D8DEE9",
          fg: "#3B4252",
          "fg-nav": "#4C566A",
        },
        gruvbox: {
          bg: "#1D2021",
          "text-header": "#EBDBB2",
          text: "#EBDBB2",
          fg: "#282828",
          "fg-nav": "#3C3836",
        },
      },
    },
  },
  plugins: [],
}
