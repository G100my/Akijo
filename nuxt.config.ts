import en from './locales/en.json'
import zh from './locales/zh.json'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-typed-router'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
        },
      ],
    },
  },
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'zh',
      messages: { en, zh },
    },
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
