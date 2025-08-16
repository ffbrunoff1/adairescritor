export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefdfb',
          100: '#fefcf7',
          200: '#fdf9f0',
          300: '#fcf6e8',
          400: '#faf2df',
          500: '#f9eed6',
          600: '#e0d5c1',
          700: '#c7bcac',
          800: '#aea397',
          900: '#958a82',
        },
        secondary: {
          50: '#f7f4f0',
          100: '#efe9e1',
          200: '#dfd3c3',
          300: '#cfbda5',
          400: '#bfa787',
          500: '#af9169',
          600: '#8c7454',
          700: '#69573f',
          800: '#463a2a',
          900: '#231d15',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gold: {
          50: '#fffdf0',
          100: '#fffbe0',
          200: '#fff6c1',
          300: '#ffed94',
          400: '#ffe066',
          500: '#ffd700',
          600: '#e6c200',
          700: '#b3960',
          800: '#806b00',
          900: '#4d4000',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'paper-texture':
          'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="paper" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"%3E%3Crect width="100" height="100" fill="%23fefdfb"/%3E%3Cpath d="m0 0h100v100h-100z" fill="none" stroke="%23f9eed6" stroke-width="0.5" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23paper)"/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};
