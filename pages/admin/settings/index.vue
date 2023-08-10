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
  settings: (await useFetch("/api/settings")).data,
});

async function onSave() {
  const data = await useFetch("/api/settings", {
    body: {
      settings: state.settings,
      jwtToken: localStorage.getItem("jwt"),
    }, method: "POST"
  })
  window.location.reload()
}
</script>

<template>
  <ClientOnly>
    <NuxtLayout :name="layout">
      <table>
        <tr v-for="(value, key) of state.settings">
          <td>{{ key }}</td>
          <td>
            <InputText v-model="state.settings![key]" placeholder="Не задано" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <Button label="Сохранить" icon="pi pi-check" @click="onSave" />
          </td>
        </tr>
      </table>
    </NuxtLayout>
  </ClientOnly>
</template>
