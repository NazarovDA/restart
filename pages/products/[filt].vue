<script setup lang="ts">
const route = useRoute();
const filt = route.params.filt as String;
const api_route = filt == "all" ? "" : `?target=${filt}`;
const data = await $fetch(`/api/products${api_route}`);
</script>

<template>
  <div class="content-wall">
    <div class="breadcrumb">
      <p id="breadcrumbs">
        <span><span class="breadcrumb_last">Продукция</span></span>
      </p>
    </div>
    <div class="items" v-for="item in data.body">
      <div class="item">
        <div class="item-thumbnail">
          <NuxtLink :to="'/products/item/' + item.id">
            <img width="500" height="500" :alt="item.name">
          </NuxtLink>
        </div>
        <div class="item-title">
          <NuxtLink :to="'/products/item/' + item.id">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <!--
    <div class="item">
      <div class="item-thumbnail">
        <a
          href="https://tdrestart.ru/products/%d0%ba%d1%83%d0%bc%d0%b8%d0%ba%d1%81%d0%b0%d0%bd-%d0%bf%d1%80%d0%be%d1%82%d0%b5%d0%ba%d1%82%d0%b8%d0%b2-%d1%86%d0%b8%d0%bd%d0%ba/"
          ><img
            width="500"
            height="500"
            src="https://tdrestart.ru/wp-content/uploads/2018/10/Zink-Pro.png"
            class="attachment-full size-full wp-post-image"
            alt="Кумиксан Протектив Цинк"
            srcset="
              https://tdrestart.ru/wp-content/uploads/2018/10/Zink-Pro.png         500w,
              https://tdrestart.ru/wp-content/uploads/2018/10/Zink-Pro-150x150.png 150w,
              https://tdrestart.ru/wp-content/uploads/2018/10/Zink-Pro-300x300.png 300w
            "
            sizes="(max-width: 500px) 100vw, 500px"
        /></a>
      </div>
      <div class="item-title">
        <a
          href="https://tdrestart.ru/products/%d0%ba%d1%83%d0%bc%d0%b8%d0%ba%d1%81%d0%b0%d0%bd-%d0%bf%d1%80%d0%be%d1%82%d0%b5%d0%ba%d1%82%d0%b8%d0%b2-%d1%86%d0%b8%d0%bd%d0%ba/"
          >Кумиксан Протектив Цинк</a
        >
      </div>
    </div>
    -->
  </div>
</template>
