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
              ><NuxtLink :to="'/product/items/' + product.item?.type">{{
                product.item?.type
              }}</NuxtLink>
              -
              <span class="breadcrumb_last">
                {{ product.item?.name }}
              </span></span
            ></span
          ></span
        >
      </p>
    </div>
    <div class="short-content-container clearfix">
      <div class="thumbnail">
        <img :alt="product.item?.name" />
      </div>
    </div>
    <div class="short-content-container clearfix">
      <p>{{ product.description?.short }}</p>
    </div>
    <div class="full-description">
      <p>{{ product.description?.long }}</p>
      <table>
        <thead>
          <tr class="row-1 odd">
            <th class="column-1">Наименование</th>
            <th class="column-2">Квалификация</th>
            <th class="column-3">Ед. изм.</th>
            <th class="column-4">Цена 1</th>
            <th class="column-5">Цена 2</th>
            <th class="column-6">Цена 3</th>
          </tr>
        </thead>

        <tbody class="row-hover">
          <tr>
            <td class="column" style="width: 177px">{{ product.item.name }}</td>
            <td class="column" style="width: 177px">
              {{ product.item.qualification }}
            </td>
            <td class="column" style="width: 177px">{{ product.item.unit }}</td>
            <td class="column" style="width: 177px">
              {{ product.item.price1 }}
            </td>
            <td class="column" style="width: 177px">
              {{ product.item.price2 }}
            </td>
            <td class="column" style="width: 177px">
              {{ product.item.price3 }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
