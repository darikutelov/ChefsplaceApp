/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4b9301",
        secondary: "#757575",
        tertiary: "#F1F1F1",
        quaternary: "#d1d1d1",
        orange: "#DD6031",
        disabled: "#DEDEDE",
        error: "#D0421B",
        success: "#138000"
      }
    }
  },
  plugins: []
}
