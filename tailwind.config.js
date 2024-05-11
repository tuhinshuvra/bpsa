/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2B72EF",
        second: "#009688",
        third: "#512da8",
        fourth: "#7b1fa2",
        fifth: "#455a64",
        sixth: "#eedd82",
        success: "#1b5e20",
        info: "#ff5722",
        danger: "#ff1744",
        bgColor: "#EFF0FC",
      },
      borderRadius: {
        main: "4px",
      },
    },
  },
  plugins: [require("daisyui", '@tailwindcss/tooltip')],
};
