/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobileSm': "388px",
        'mobileExtraSm': "303px",
      },
      colors: {
        'main': '#0cc2d0',
      },
    },
  },
  plugins: [],
};
