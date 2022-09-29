/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b9ddd",

          secondary: "#10ce6c",

          accent: "#a2f49c",

          neutral: "#1C2831",

          "base-100": "#F6F4F6",

          info: "#4888EF",

          success: "#6AECC7",

          warning: "#F9911A",

          error: "#F87162",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
