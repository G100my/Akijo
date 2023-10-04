import Markdown from 'unplugin-vue-markdown/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', 'nuxt-typed-router'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;900&family=Sora:wght@400;500;900&display=swap' },
      ],
    },
  },
  vite: {
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
    plugins: [
      Markdown({
        /* options */
      }),
    ],
  },
  // https://tailwindcss.nuxtjs.org/getting-started/options#viewer
  // tailwindcss: {
  //   cssPath: false,
  //   configPath: 'tailwind.config',
  //   exposeConfig: false,
  //   injectPosition: 'first',
  //   viewer: true,
  // },
})
