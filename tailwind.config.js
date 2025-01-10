/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bronze': "#E5AB92",
        'silver': "#D0D0D0",
        'gold': "#E5D592",
        'lightwhiteturquoise': "#E7F9F7",
        'whiteturquoise': "#DFF2F0",
        'addwhiteturquoise': "#92E5E2",
        'turquoise': "#3AAFAA",
        'lightturquoise': "#92E5E2",
        'darkturquoise': "#2A7A78",
        'dark': "#17242B",
        primary: "#4F46E5", // Основной цвет из вашего макета
        secondary: "#9333EA", // Второстепенный цвет
      },
    },
  },
  plugins: [],
};