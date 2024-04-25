/**
 * @type {import("tailwindcss/plugin")}
 */
const plugin = require('tailwindcss/plugin')
/**
 * @type {import("tailwindcss").Config};
 */
const config = {
  content: ['./**/*.{ts,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, addUtilities }) {
      matchUtilities(
        {
          'multi-line-ellipsis': (value) => ({
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': value,
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
          }),
        },
        { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      ),
        addUtilities({
          '.no-scrollbar': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',

            /* Firefox */
            'scrollbar-width': 'none',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        })
    }),
  ],
  theme: {
    extend: {
      colors: (PluginUtils) => ({
        design: {
          dark: '#231815',
          light: '#E8E3D0',
          red: '#ff4c14',
          orange: '#E45A24',
          lightgray: '#919191',
        },
      }),
      fontSize: () =>
        Array(50)
          .fill(null)
          .reduce(
            (acc, _i, ii) => ({ ...acc, [(ii + 1) * 2]: (ii + 1) * 2 + 'px' }),
            {},
          ),
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        jost: `Jost, Sora, Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`,
        noto: `Noto Sans TC, Sora, Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`,
      },
    },
  },
}

module.exports = config
