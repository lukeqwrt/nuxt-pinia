// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app:{
    head:{
      title: 'Adventure Store',
      meta: [
        { name: 'description', content:'Adventure Store'}
      ],
      link: [
        { 
          rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        },
        { 
          rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" 
        },
        { 
          rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=VT323&display=swap" 
        },
      ]
    }
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})