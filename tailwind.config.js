/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter-Medium'],
        body: ['Inter-Regular'],
      },
      fontSize: {
        // Define custom font sizes if needed
        heading: '24px',
        body: '16px',
        caption: '14px',
      },
    },
  },
  plugins: [],
}

