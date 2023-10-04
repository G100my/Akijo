/**
 * @type {import("tailwindcss").Config};
 */
const config = {
  theme: {
    extend: {
      colors: (PluginUtils) => ({
        design: {
          red: '#ff4c14',
        },
        primary: {
          bg: PluginUtils.colors.slate[950],
        },
      }),
    },
  },
}

module.exports = config
