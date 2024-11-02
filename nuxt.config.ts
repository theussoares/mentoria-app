// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR' // ou o idioma desejado, como 'en' para inglês
      }
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
