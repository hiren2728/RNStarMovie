/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customRegular: ["RobotoMono-Regular"],
        customBold: ["RobotoMono-Bold"],
        customMedium: ['RobotoMono-Medium'],
        customThin: ['RobotoMono-Thin'],
        customLight: ['RobotoMono-Light']
      },
      colors: {
        transparent: 'transparent',
        davysBlack: '#5C5A5B',
        purple: '#A29CF5',
        lavender: '#E5E3F2',
        grullo: '#A6A185',
        silver: '#B5B5B5',
        white: "#FFFFFF",
        red: '#FF9494',
      },
      borderColor: {
        purple: '#A29CF5',
      }
    },
  },
  plugins: [],
};

