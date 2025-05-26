// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/ui', '@nuxt/fonts'],
  css: ["assets/css/style.css","assets/css/elements.css","assets/css/components.css"],
  ui: {
    theme: {
      colors: [
        'primary',
        'red',
        'creme',
        'grafite'
      ]
    }
  },
  srcDir: 'app/',
})