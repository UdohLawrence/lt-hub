/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/assets/images/hero-image.jpeg')",
        'cat1': "url('/assets/images/cat-1.jpeg')",
        'cat2': "url('/assets/images/cat-2.jpeg')",
        'cat3': "url('/assets/images/cat-3.jpeg')"
      })
    },
  },
  plugins: [],
}