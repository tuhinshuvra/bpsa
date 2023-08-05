/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2B72EF",
        second: "#009688",
        bgColor: "#EFF0FC",
      },
      borderRadius: {
        main: "4px",
      },
    },
  },
  plugins: [require("daisyui")],
};
