/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
  ],
  darkMode: 'class',
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
      colors:{
        primary: "#F30303",
        primaryLighter: "#0758E7",
        secondary: "#1D1D1D",
        yellow: "#FFC400",
      
        
        dark:{
          1:"#000000",
          2:"#1E1E1E",
          3:"#292828",
        },
        light:{
          1:"#f5f5f5",
          2:"#C5C5C5",
          3:"#707070",
          4:"#F3F3F3"
        },
      },
      variants: {
        extend: {
          backgroundColor: ['dark'], // Enable dark mode variants
          textColor: ['dark'],       // Enable dark mode variants
        },
      },
      screens: {
        xs: '495px',
        md:'819px',
        '3xl': '2400px',
      },
    },
  }
}