export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
  }
})
