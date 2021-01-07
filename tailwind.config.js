const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
      robotoMedium: ['Roboto Medium'],
    },
    extend: {
      colors: {
        orange: {
          ...colors.orange,
          '1': '#F0870D',
        },
        gray: {
          ...colors.gray,
          '1': '#F4F4F4',
          '2': 'rgba(0,0,0,0.6)',
          '3': '#DDDDDD',
        },
        black: {
          ...colors.black,
          '1': '#4A4A4A',
          '2': 'rgba(0, 0, 0, 0.87)',
          '0': '#000',
        },
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-100': '-100',
      },
      fontSize: {
        '2xl': '1.889rem',
        '5xl': '2.67rem',
        '7xl': '5rem',
        '2xs': '0.6rem',
      },
      boxShadow: {
        blur: '0 8px 20px rgba(0, 0, 0, .25)',
        elevation:
          '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2)',
        nav: '0 2px 4px 0 rgba(0,0,0,0.2)',
      },
      width: {
        '1/13': '7.692307692%',
        '2/13': '15.384615384%',
        '3/13': '23.076923077%',
        '4/13': '30.769230769%',
        '5/13': '38.461538462%',
        '6/13': '46.153846154%',
        '7/13': '53.846153846%',
        '8/13': '61.538461538%',
        '9/13': '69.230769231%',
        '10/13': '76.923076923%',
        '11/13': '84.615384615%',
        '12/13': '92.307692308%',
      },
    },
  },
  variants: {},
  plugins: [],
};
