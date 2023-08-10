<script setup lang="ts">
import { Product } from "types/product";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const route = useRoute();
const id = route.params.id as String;

const data = await $fetch(`/api/products/${id}`)

const state = reactive<{ product: Product, similar: Product[] | null }>({
  product: data.product,
  similar: data.similar
});

useHead({
  title: state.product?.name,
});

console.log(1);
</script>

<template>
  <div v-if="state.product" class="content-wall">
    <div class="breadcrumb">
      <p id="breadcrumbs">
        <span>
          <NuxtLink to="/state.product/items/all"></NuxtLink>
          <NuxtLink :to="'/state.product/items/' + state.product.type">
            {{ state.product.type }}
          </NuxtLink>
          -
          <span class="breadcrumb_last">
            {{ state.product.name }}
          </span>
        </span>
      </p>
    </div>
    <div class="short-content-container clearfix">
      <img
        :src="'/pictures/' + state.product.name + '.jpeg'"
        width="307"
        height="165"
        style="float: left"
      />
      <span v-html="state.product.shortDescription"></span>
    </div>
    <div v-html="state.product.longDescription"></div>
    <DataTable :value="state.similar">
      <Column field="name" header="Наименование" />
      <Column field="qualification" header="Квалификация" />
      <Column field="unit" header="Ед. измерения" />
      <Column field="price1" header="Цена" />
    </DataTable>
  </div>
</template>
