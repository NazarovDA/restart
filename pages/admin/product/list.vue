<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";

try {
  if (!checkRules(readJWT(localStorage.getItem("jwt")!), "Product.Edit")) {
    await navigateTo("/auth");
  }
} catch (e) {
  await navigateTo("/auth");
}

const layout="admin"

const loading = ref(false);

const lazyParams = reactive({
  where: {
    name: {
      value: "",
      matchMode: "",
    },
  },
  take: 5,
  skip: 0,
  orderBy: "asc",
});

const products = ref();
const amount = ref();

type Data = (
  | {
      id: string;
      name: string;
    }[]
  | {
      _count: {
        id: number;
      };
    }
)[];

async function lazyLoadData() {
  loading.value = true;

  const data: Data = await APIHandler.getList({
    jwtToken: localStorage.getItem("jwt")!,
    filters: lazyParams,
  });

  products.value = data[0];
  amount.value = data[1];
  loading.value = false;
}

const onEvent = async (event) => {
  lazyParams.take = event.rows;
  lazyParams.skip = event.first;

  lazyParams.where = event.filters;
  await lazyLoadData();
};

async function onPage(event) {
  await onEvent(event);
}
async function onSort(event) {
  await onEvent(event);
}
async function onFilter(event) {
  await onEvent(event);
}

async function openPage(event) {
  await navigateTo(`/admin/product/${event.data.id}`);
}

const filters = ref({
  name: { value: "", matchMode: "" },
});

await lazyLoadData();
</script>

<template>
  <NuxtLayout :name="layout">
  <DataTable
    paginator
    lazy
    v-model:filters="filters"
    :value="products"
    :rowsPerPageOptions="[5, 10, 20, 50]"
    :rows="5"
    :totalRecords="amount._count.id"
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="от {first} до {last} из {totalRecords}"
    tableStyle="min-width: 50rem"
    filterDisplay="row"
    :loading="loading"
    dataKey="id"
    :globalFilterFields="['name']"
    selectionMode="single"
    @page="onPage($event)"
    @sort="onSort($event)"
    @filter="onFilter($event)"
    @rowSelect="openPage"
    removableSort
  >
    <Column header="Изображение">
      <template #body="slotProps">
        <img :src="'/pictures/' + slotProps.data.hashImage" height="40" />
      </template>
    </Column>
    <Column field="name" header="Наименование">
      <template #filter="{ filterModel, filterCallback }">
        <InputText
          type="text"
          v-model="filterModel.value"
          @keydown.enter="filterCallback()"
          class="p-column-filter"
          placeholder="Search"
        /> </template
    ></Column>
  </DataTable>
</NuxtLayout>
</template>
