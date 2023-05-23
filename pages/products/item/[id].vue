<script setup lang="ts">
const route = useRoute();
const id = route.params.id as String;

const product = await $fetch(`/api/products/${id}`);
</script>

<template>
  <div class="content-wall">
    <div class="breadcrumb">
      <p id="breadcrumbs">
        <span
          ><span rel="v:child" typeof="v:Breadcrumb"
            ><NuxtLink to="/product/items/all"></NuxtLink>
            -
            <span rel="v:child" typeof="v:Breadcrumb"
              ><NuxtLink :to="'/product/items/' + product.product?.type">{{
                product.product?.type
              }}</NuxtLink>
              -
              <span class="breadcrumb_last">
                {{ product.product?.name }}
              </span></span
            ></span
          ></span
        >
      </p>
    </div>
    <div v-html="product.product?.shortDescription"></div>
    <div v-html="product.product?.longDescription"></div>
  </div>
</template>
