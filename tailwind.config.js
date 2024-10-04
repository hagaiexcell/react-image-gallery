/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan path ini sesuai
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: "#0f0e0e",
        secondary: "#cdf851",
        
      },
      fontFamily: {
        display: ["Poppins"],
      },
    },
  },
  plugins: [],
};
