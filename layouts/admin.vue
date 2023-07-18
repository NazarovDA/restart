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
          await navigateTo("admin/product/list", {replace:true});
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
      await navigateTo("admin/product/new", {replace:true});
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
          await navigateTo("admin/user/list", {replace:true});
        },
      },
      {
        label: "Добавить",
        icon: "pi pi-fw pi-user-plus",
        command: async () => {
          await navigateTo("admin/user/new", {replace:true});
        },
      },
    ],
  });
}
// const toast = useToast();
</script>

<template>
  <div class="card">
    <Menubar :model="items"> </Menubar>
  </div>
  <slot />
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
