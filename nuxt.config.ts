// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/asset/css/main.css'],
  modules: ['@nuxtjs/supabase'],

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: [
        '/', 
        '/detail/*', 
        '/cart', 
        '/register', 
        '/dashboard/*',
        '/dashboard'
      ],
      cookieRedirect: false,
    }
  }
})