const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Lato'],
      josefinSans: ['JosefinSans'],
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
        beige:{
          '1': '#E5DDD4'
        },
        blue:{
          '1': '#364555'
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
        featuredProjectLeft: "-10px -10px 0px #E5DDD4",
        featuredProjectRight: "10px -10px 0px #364555",
      },
      width: {
        processCard: "350px",
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
      height: {
        md: "35rem",
        lg: "42rem",
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      margin: {
        processBannerOffset: "800px"
      },
      minHeight: {
        '0': '0',
        '200': '200px',
        '300': '300px',
       }
    },
  },
  variants: {},
  plugins: [],
};
