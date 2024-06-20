// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Lesson Teachers Hub',
      meta: [
        {name: 'description', content: 'Get Professional Home Tutors for your treasured child, anywhere in Nigeria.'}
      ],
      link: [
        {rel: 'icon', href: './assets/images/favico.ico'}
      ]
    }
  }
})