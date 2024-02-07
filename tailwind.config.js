/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": "Inter, sans-serif",
        "Anton": "Anton, sans-serif"
      }
    },
    backgroundImage:{
      buttonbg:"linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)",
      buttonbg2: "linear-gradient(306.99deg, #7AF57A -13.72%, #51C8EF  102.02%)",
    }
  },
  plugins: [],
}

