<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const layout = "admin";

try {
  if (!checkRules(readJWT(localStorage.getItem("jwt")!), "Product.Edit")) {
    await navigateTo("/auth");
  }
} catch (e) {
  await navigateTo("/auth");
}

const state = reactive({
  managers: (await useFetch("/api/managers")).data,
});

async function onSave() {
  const data = await useFetch("/api/admin/managers/list", {
    body: {
      managers: state.managers,
      jwtToken: localStorage.getItem("jwt"),
    },
    method: "POST",
  });
  window.location.reload()
}
</script>

<template>
  <NuxtLayout :name="layout">
    <table v-for="(value, key) of state.managers">
      <tr>
        <td>id</td>
        <td><InputText v-model="state.managers![key].id" disabled /></td>
      </tr>
      <tr>
        <td>ФИО</td>
        <td><InputText v-model="state.managers![key].fio" /></td>
      </tr>
      <tr>
        <td>Телефон</td>
        <td><InputText v-model="state.managers![key].phone" /></td>
      </tr>
      <tr>
        <td>Почта</td>
        <td><InputText v-model="state.managers![key].email" /></td>
      </tr>
    </table>
    <table>
      <td colspan="2">
        <Button label="Сохранить" icon="pi pi-check" @click="onSave" />
      </td>
    </table>
  </NuxtLayout>
</template>
