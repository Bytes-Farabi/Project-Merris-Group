/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lilita: ['"Lilita One"', 'cursive'],
        pacifico: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ]
}