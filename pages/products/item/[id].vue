<script setup lang="ts">
const route = useRoute();
const id = route.params.id as String;

const product = await $fetch(`/api/products/${id}`);
</script>

<template>
  <ClientOnly>
    <div class="content-wall">
      <div class="breadcrumb">
        <p id="breadcrumbs">
          <span>
            <NuxtLink to="/product/items/all"></NuxtLink>
            <NuxtLink :to="'/product/items/' + product.type">
              {{ product.type }}
            </NuxtLink>
            -
            <span class="breadcrumb_last">
              {{ product.name }}
            </span>
          </span>
        </p>
      </div>
      <div class="short-content-container clearfix">
        <img
          :src="'/pictures/' + product.name + '.jpeg'"
          width="220"
          height="107"
        />
        <div v-html="product.shortDescription"></div>
      </div>
      <div v-html="product.longDescription"></div>
    </div>
  </ClientOnly>
</template>
