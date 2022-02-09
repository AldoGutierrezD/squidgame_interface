module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'freight': ['Freight Sans'],
      },
      backgroundImage: {
        'squid': "url('/src/img/background-main.png')",
        'squid-secondary': "url('/src/img/background-secondary.jpg')"
      }
    },
  },
  plugins: [],
}
