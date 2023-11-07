/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode:'class',
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
        '100': "100px",
        '200': "200px",
        '300': "300px",
        '400': "400px",
        '500': "500px",
        '600': '600px',
        '700': '700px'
      },
    extend: {},
  },
  plugins: [],
}

