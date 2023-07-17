<script setup lang="ts">
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

import DataTable from "primevue/datatable";
import Column from "primevue/column";

const loading = ref(false);

const lazyParams = reactive({
  take: 5,
  skip: 0,
});

const users = ref();
const count = ref();

const toast = useToast();

async function lazyLoadData() {
  let data = await $fetch("/api/admin/users/list", {
    body: {
      jwtToken: localStorage.getItem("jwt")!,
      filters: lazyParams,
    },
    method: "POST",
  }).catch(adminApiErrorHandler);

  users.value = data.users;
  count.value = data.count;
}

const onEvent = async (event) => {
  lazyParams.take = event.rows;
  lazyParams.skip = event.first;
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
await lazyLoadData();
</script>

<template>
  <ClientOnly>
    <Toast />
    <DataTable
      paginator
      lazy
      :value="users"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :rows="5"
      :totalRecords="count._count.id"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="от {first} до {last} из {totalRecords}"
      tableStyle="min-width: 50rem"
      filterDisplay="row"
      :loading="loading"
      @page="onPage($event)"
      @sort="onSort($event)"
      @filter="onFilter($event)"
      removableSort
    >
      <Column header="Id" field="id"></Column>
      <Column header="Статус" field="status"></Column>
      <Column header="Логин" field="login"></Column>
    </DataTable>
  </ClientOnly>
</template>
