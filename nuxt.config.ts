// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: 'Mentoria Frontend',
      htmlAttrs: {
        lang: 'pt-BR',
      }
    }
  },
  devtools: { enabled: true },
  imports: {
    dirs: ['stores']
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
})