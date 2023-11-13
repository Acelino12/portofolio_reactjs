/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 10px 3px rgba(66, 126, 245)',
      },
      height: {
        '500px': '500px',
      }
    },
  },
  plugins: [],
}

