/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/5": "4 / 5",
        "3/4": "3 / 4",
        "2/3": "2 / 3",
      },
      maxWidth: {
        128: "32rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
