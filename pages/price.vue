<script setup lang="ts">
import { reactive } from "vue";
const types = {
  Растворители: [
    "Растворители",
    "Квалификация",
    "Единицы измерения",
    "от 1000 л/кг",
    "до 1000 л/кг",
    "канистры 10-20л/кг",
  ],
  "Смесевые растворители": [
    "Смесевые растворители",
    "Квалификация",
    "Ед. изм.",
    "до 1000 л",
    "от 1000 л",
    "канистры 10-20л",
  ],
  "Олифы, смывки, смолы, отвердители, пудра, преобразователи ржавчины": [
    "Олифы, смывки, смолы, отвердители, пудра, преобразователи ржавчины",
    ,
    ,
    ,
    ,
  ],
  Тара: ["Тара", , , , ,],
  Грунты: ["Грунты", , , , ,],
  Лаки: ["Лаки", , , , ,],
  "Шпатлевки, краски": ["Шпатлевки, краски", , , , ,],
  Эмали: ["Эмали", , , , ,],
  "Водно-дисперилорсионные материалы": [
    "Водно-дисперилорсионные материалы",
    ,
    ,
    ,
    ,
  ],
  "Пена монтажная": ["Пена монтажная", , , , ,],
  "Очиститель монтаж. Пены": ["Очиститель монтаж. Пены", , , , ,],
  "Герметики силиконовые": ["Герметики силиконовые", , , , ,],
};

const products = await $fetch("/api/products");

const state = reactive({
  query: "",
  filtered: {} as {
    [key in keyof typeof types]?: (typeof products.body)[number][];
  },
});

function sorting() {
  let variable: typeof state.filtered = {};

  for (const type in types) {
    // @ts-ignore
    variable[type] = products.body.filter(
      (chunk) =>
        type == chunk.type &&
        chunk.name?.toLowerCase().includes(state.query.toLowerCase())
    );
  }

  state.filtered = variable;
}

sorting();

watch(() => state.query, sorting);
</script>

<template>
  <div class="content-wall" ref="products">
    <div class="breadcrumb">
      <p id="breadcrumbs">
        <span><span class="breadcrumb_last">Стоимость</span></span>
      </p>
    </div>
    <p>
      <strong
        >В прайс-листе представлен не полный перечень товаров. Действует гибкая
        система скидок!</strong
      ><label style="float:right">Поиск: <input v-model="state.query" /> </label><br />
    </p>
    <div class="table-wrapper">
      <table class="table">
        <tbody v-for="(t_value, t_key) in state.filtered" :key="t_key">
          <tr>
            <th v-for="(param, idx) in types[t_key]" :key="idx">
              {{ param }}
            </th>
          </tr>

          <tr v-for="product in t_value" :key="product.id">
            <td class="column">{{ product.name }}</td>
            <td class="column">
              {{ product.qualification }}
            </td>
            <td class="column">{{ product.unit }}</td>
            <td class="column">{{ product.price1 }}</td>
            <td class="column">{{ product.price2 }}</td>
            <td class="column">{{ product.price3 }}</td>
          </tr>

          <tr>
            <td style="height: 20px"></td>
          </tr>
        </tbody>
      </table>

      
    </div>
  </div>
</template>

<style>
.dataTables_filter {
  color: #454545;
  text-align: left;
  margin: 0;
  padding: 40, 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  float: right;
  white-space: nowrap;
}
.row-hower {
  color: #454545;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

.column {
  color: #454545;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  font: inherit;
  padding: 8px;
  border: none;
  background: 0 0;
  text-align: left;
  float: none !important;
  vertical-align: top;
  background-color: #fff;
  border-top: 0;
  width: 177px;
}

th {
  font-weight: bold;
}
</style>
