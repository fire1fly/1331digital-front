/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'hisqaida-bold': ['Hisqaida2018-Bold', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        'intro-black': ['Intro Black', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        maristraltt: ['MagistralTT', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        'magistral-black': ['Magistral Black', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        'alegreya-bold': ['Alegreya Sans SC Bold', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        'geometria-regular': ['Geometria Regular', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        'geometria-bold': ['Geometria Bold', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        couriernew: ['CourierNew', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
      },
    },
  },
  plugins: [],
};
