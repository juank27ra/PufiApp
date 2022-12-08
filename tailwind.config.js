/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
              'hero-pattern': "url('/img/hero-pattern.svg')",
              'footer-texture': "url('/img/footer-texture.png')",
                })
    },
  },
  plugins: [],
}
