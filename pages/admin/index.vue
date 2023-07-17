<script setup lang="ts">
import Menubar from "primevue/menubar";

try {
  if (!checkRules(readJWT(localStorage.getItem("jwt")!), "admin")) {
    await navigateTo("/auth");
  }
} catch (e) {
  await navigateTo("/auth");
}

const items = ref([
  {
    label: "Продукт",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "Список",
        icon: "pi pi-fw pi-pencil",
        command: async () => {
          await navigateTo("admin/product/list");
        },
      },
    ],
  },
]);
if (checkRules(readJWT(localStorage.getItem("jwt")!), "Product.Create")) {
  items.value[0].items.push({
    label: "Добавить",
    icon: "pi pi-fw pi-plus",
    command: async () => {
      await navigateTo("admin/product/new");
    },
  });
}

if (checkRules(readJWT(localStorage.getItem("jwt")!), "User.Manage")) {
  items.value.push({
    label: "Пользователи",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "Список",
        icon: "pi pi-fw pi-user",
        command: async () => {
          await navigateTo("admin/user/list");
        },
      },
      {
        label: "Добавить",
        icon: "pi pi-fw pi-user-plus",
        command: async () => {
          await navigateTo("admin/user/new");
        },
      }
    ],
  });
}
// const toast = useToast();
</script>

<template>
  <div class="card">
    <Menubar :model="items"> </Menubar>
  </div>
  <!-- <div v-if="value == 'Товары'">
    <DataTable
      v-model:filters="filters"
      :value="products"
      paginator
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :rows="5"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="от {first} до {last} из {totalRecords}"
      tableStyle="min-width: 50rem"
      filterDisplay="row"
      :loading="loading"
      dataKey="id"
      :globalFilterFields="['name']"
      selectionMode="single"
      v-model:selection="selectedProduct"
      removableSort
      @rowSelect="openPage"
    >
      <template #header>
        <div class="flex justify-content-end">
          <span class="p-input-icon-left">
            <i class="pi pi-search"></i>
            <InputText
              class="input"
              v-model="filters['name'].value"
              placeholder="Поиск по наименованию"
            />
          </span>
        </div>
      </template>
      <template #loading> Загружаются данные, пожалуйста, подождите </template>
      <template #empty> Такие товары не найдены </template>
      <Column field="name" header="Наименование" sortable></Column>
    </DataTable>
  </div> -->
</template>

<style lang="css">
.card {
  justify-content: center;
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.input {
  width: 15rem;
}
</style>
