<script setup lang="ts">
const name = "http://localhost:3000";
const keywords: String[] = [];
useHead({
  title: "ТД Рестарт",
  meta: [
    {
      hid: "description",
      name: "description",
      content: 'Торговый Дом "Рестарт" Лакорасочные материалы и растворители',
    },
    {
      hid: "ya_webMaster",
      name: "yandex-verification",
      content: "e537b0d27408e623",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: keywords.join(", "),
    },
    { name: "viewport", content: "width=1200", key: "viewport" },
    { charset: "utf-8" },
    { property: "og:locale", content: "ru_RU" },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "Главная страница ТД Рестарт - Торговый Дом Рестарт",
    },
    {
      property: "og:description",
      content:
        "Торговый Дом &quot;Рестарт&quot; Лакорасочные материалы и растворители",
    },
    { property: "og:url", content: name },
    { property: "og:site_name", content: "Торговый Дом Рестарт" },
    { property: "og:image", content: `${name}/img/logo.png` },
    { name: "twitter:card", content: "summary" },
    {
      name: "twitter:description",
      content:
        "Торговый Дом &quot;Рестарт&quot; Лакорасочные материалы и растворители",
    },
    {
      name: "twitter:title",
      content: "Главная страница ТД Рестарт - Торговый Дом Рестарт",
    },
    {
      name: "twitter:image",
      content: `${name}/img/i_ce37d58bd02c020e_html_8e8c6a70.jpg`,
    },
  ],
  htmlAttrs: { lang: "ru" },
  link: [{ rel: "icon", type: "image/svg+xml", href: "/logo_clean.svg" }],
});
const dict = [
  { key: "Растворители", value: "Растворители" },
  { key: "Эмали", value: "Эмали" },
  { key: "Краски", value: "Шпатлевки, краски" },
  { key: "Лаки", value: "Лаки" },
  { key: "Грунты", value: "Грунты" },
  { key: "Шпатлевки", value: "Шпатлевки" },
  {
    key: "Смолы",
    value: "Олифы, смывки, смолы, отвердители, пудра, преобразователи ржавчины",
  },
  { key: "Олифы", value: "Олифы" },
  { key: "Герметики", value: "Герметики силиконовые" },
  { key: "Монтажные пены", value: "Пена монтажная" },
  { key: "Компоненты ЛКМ", value: "Компоненты ЛКМ" },
  { key: "Клей", value: "Клей" },
  { key: "Тара", value: "Тара" },
  {
    key: "Антисептики и морилки для дерева",
    value: "Антисептики и морилки для дерева",
  },
  { key: "Декоративные покрытия", value: "Декоративные покрытия" },
];
</script>

<template>
  <div id="wrapper">
    <TheHeader />
    <section class="row page-content">
      <div class="cntr clearfix">
        <aside>
          <!--
          <div class="search-form">
            <form role="search" method="get" id="searchform" action="products">
              <input
                type="text"
                value=""
                name="s"
                id="s"
                placeholder="Поиск товаров"
              />
              <input type="submit" value="" />
            </form>
            
          </div>
          -->

          <div class="product-side-menu">
            <ul
              id="menu-%d0%b8%d0%ba%d0%be%d0%bd%d0%be%d1%87%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e"
              class="first-menu"
            >
              <li
                id="menu-item-25"
                class="menu-item menu-item-type-post_type_archive menu-item-object-products menu-item-has-children menu-item-25"
              >
                <NuxtLink to="/products/all"
                  >ЛАКОКРАСОЧНАЯ ПРОДУКЦИЯ И РАСТВОРИТЕЛИ</NuxtLink
                >
                <ul class="sub-menu">
                  <li
                    id="menu-item"
                    class="menu-item"
                    v-for="data in dict.slice(0, 11)"
                  >
                    <NuxtLink :to="'/products/' + data.value">
                      {{ data.key }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="menu" v-for="data of dict">
              <li id="menu-item" class="menu-item">
                <NuxtLink :to="'/products/' + data.value">
                  {{ data.key }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </aside>
        <div class="content-zone">
          <slot />
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>
