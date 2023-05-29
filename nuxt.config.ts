// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-simple-sitemap", "@artmizu/yandex-metrika-nuxt"],
  runtimeConfig: { yandexMetrika: { id: 93755986 } },
});
