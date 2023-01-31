/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./assets/bg.jpg')",
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      dacing: ['Dancing Script', 'cursive']
    }
  },
  plugins: [],
}
