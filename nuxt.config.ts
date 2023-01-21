import en from './locales/en.json'
import zh from './locales/zh.json'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'zh',
      messages: { en, zh },
    },
  },
})
