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
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,600,0,0',
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
})
