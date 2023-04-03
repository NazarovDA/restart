<script setup lang="ts">
const dict = [
  { key: "Растворители", value: "solvents" },
  { key: "Эмали", value: "test" },
  { key: "Краски", value: "test" },
  { key: "Лаки", value: "test" },
  { key: "Грунты", value: "test" },
  { key: "Шпатлевки", value: "test" },
  { key: "Смолы", value: "test" },
  { key: "Олифы", value: "test" },
  { key: "Герметики", value: "test" },
  { key: "Монтажные пены", value: "test" },
  { key: "Компоненты ЛКМ", value: "test" },
  { key: "Клей", value: "test" },
  { key: "Тара", value: "test" },
  { key: "Антисептики и морилки для дерева", value: "test" },
  { key: "Декоративные покрытия", value: "test" },
];
</script>

<template>
  <div id="wrapper">
    <TheHeader />
    <section class="row page-content">
      <div class="cntr clearfix">
        <aside>
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
          <div class="product-side-menu">
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
