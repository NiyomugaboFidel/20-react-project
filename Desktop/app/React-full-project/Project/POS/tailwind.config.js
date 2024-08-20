/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': {'min': '320px', 'max': '640px'},
    //   'md': {'min': '641px', 'max': '768px'},
    //   'lg': {'min': '768px', 'max': '1024px'},
    //   // 'xl': {'min': '1280px', 'max': '1535px'},
    //   // '2xl': {'min': '1536px'},
    // },
    extend: {
      colors:{
        'blueColor': '#2a68ff',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
        
      }
    },
  },
  plugins: [],
}