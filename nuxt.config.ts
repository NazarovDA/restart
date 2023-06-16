// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
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
});
