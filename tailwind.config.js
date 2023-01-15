/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{tsx,ts}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { nord0: "#e5e9f0", nord1: "#d8dee9", nord2: "#2e3440", nord3: "#3b4252" },
    },
  },
  plugins: [],
}
