// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "~/assets/css/main.css",
  ],
  routeRules: {
    '/admin/**': { ssr: false },
  },
  modules: ["nuxt-simple-sitemap", "@artmizu/yandex-metrika-nuxt"],
  runtimeConfig: {
    public: {
      yandexMetrika: {
        // @ts-ignore
        id: 93787611,
      },
    },
  },
  sitemap: {
    siteUrl: "http://tdrmarket.ru",
  },
  build: {
		transpile: ["primevue"]
	},
  vite: {
    optimizeDeps: {
        include: ['quill'],
    },
},
});
