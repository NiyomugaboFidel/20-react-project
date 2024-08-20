/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
    bgColor:'#fff',    
    primary:'rgba(2,137,1)',
    secondary:'rgba(0,0,0,0.5)',
    green400:'rgba(4,103,0)',
    green200:'rgba(1,160,0)',
    green600:'rgba(2,100,0)',
    textColor:'#fff',
    textColor2:'#f1f1f1', 
      },
      backgroundImage:{
        bgImg1:`url('./public/img/home.jpg')`,
        bgImg1:`url('./public/img/p-1.jpg')`,
        bgImg1:`url('/img/p-2.jpg')`,
      }
    },
  },
  plugins: [],
};
