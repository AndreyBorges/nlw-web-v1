/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: 'url(https://live.staticflickr.com/65535/52692139307_142070be0f_h.jpg)',
        'nlw-gradient':
          'linear-gradient( 90deg,rgba(0, 0, 255, 0.5),rgba(248, 5, 167, 1),yellow,rgb(40, 255, 208))',
        'game-card-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.9) 67.08%)'
      }
    }
  },
  plugins: []
}
