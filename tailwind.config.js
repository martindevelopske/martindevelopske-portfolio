/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', 
  theme: {
    
    screens: {
       'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    height: {
      "25": "25px",
      "36": "36px",
      '48': '48px',
      "50": "50px",
      '64': "64px",
      '100': "100px",
      '160': '160px',
      '200': "200px", 
      '250': "250px",
      '300': "300px",
      '400': "400px",
      '500': "500px",
      "550": "550px",
      '600': '600px',
      '700': '700px',
      '800': '800px',
      '900': '900px',
    },
    extend: {
      colors: {
      'cardbg': '#1d1d1d',
      'gradient-top': '#181818',
      '1e': "#1e1e1e",
      'blackbg': '#101010',   
      'pinkred': "#c91c29"
    },
    },
  },
  plugins: [],
}
