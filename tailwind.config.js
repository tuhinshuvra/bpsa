/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2B72EF",
        second: "#E82632",
      },
      borderRadius: {
        main: "4px",
      },
    },
  },
  plugins: [],
};
