module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./scripts/**/*.{js}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio")
  ]
};
