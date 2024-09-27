/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '375px',
      'md': '650px',
      'lg': '1200px',
      'xl': '1940px',
    },
  },
  plugins: [],
};


