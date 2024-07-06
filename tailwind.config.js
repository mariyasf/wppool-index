/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'serif': ['ui-serif', 'Georgia', 'Nantes'],

    },

    extend: {
      boxShadow: {
        'custom-shadow': '0px 24px 24px 0px rgba(0, 0, 0, 0.36)',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}