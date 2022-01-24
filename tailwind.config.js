module.exports = {
  // mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1591AA',
        secondary: '#e5e5e5',
      },
      fontFamily: {
        body: ['Space Grotesk'],
        new: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
