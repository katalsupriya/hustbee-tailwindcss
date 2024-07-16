module.exports = {
  content: ["./public/**/*{.html,js}"],
  theme: {
    fontFamily: {
      'sans':['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': {
          100: '#eaf2fe',
          200: '#58bafc',
          300: '#82a9ff',
          400: '#5993fa',
          500: '#4789fc',
          600: '#4083f9',
          700: '#3375e7',
          800: '#2a74e3',
          900: '#164e63',
        },
        'secondary': {
          100: '#a9b6c4',
          200: '#adadad',
          300: '#91a0bd',
          400: '#65728b',
          500: '#4d5666',
          600: '#4469aa',
          700: '#3d5e98',
          800: '#3b4048',
          900: '#333c4e',
          1000: '#29303f',
          1100: '#111a2b',
          1200: '#090a19',
          1300: '#0c090d',
        },
        'warning': {
          100: '#ffc600',
          200: '#e6b200',
        },
      },
    },
  },
  plugins: [require('@themesberg/flowbite/plugin')],
}