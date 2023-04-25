
/**
 * @type {import("tailwindcss").Config};
 */
const config = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lemonade', 'forest', 'night', 'cupcake', 'acid'],
  },
  theme: {
    extend: {
      colors: {
        design: {
          red: '#ff4c14',
        },
      },
    },
  },
}

module.exports = config
