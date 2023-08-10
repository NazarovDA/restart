<script setup lang="ts">
import Menubar from "primevue/menubar";
import { MenuItem } from "primevue/menuitem";

try {
  if (!checkRules(readJWT(localStorage.getItem("jwt")!), "admin")) {
    await navigateTo("/auth");
  }
} catch (e) {
  await navigateTo("/auth");
}

const items = ref<MenuItem[]>([
  {
    label: "Продукт",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "Список",
        icon: "pi pi-fw pi-pencil",
        command: async () => {
          await navigateTo("/admin/product/list");
        },
      },
    ],
  },
]);

if (checkRules(readJWT(localStorage.getItem("jwt")!), "Product.Create")) {
  items.value[0].items!.push({
    label: "Добавить",
    icon: "pi pi-fw pi-plus",
    command: async () => {
      await navigateTo("/admin/product/new");
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
          await navigateTo("/admin/user/list");
        },
      },
      {
        label: "Добавить",
        icon: "pi pi-fw pi-user-plus",
        command: async () => {
          await navigateTo("/admin/user/new");
        },
      },
    ],
  });
}

if (checkRules(readJWT(localStorage.getItem("jwt")!), "Settings.Edit")) {
  items.value.push({
    label: "Настройки",
    icon: 'pi pi-fw pi-calendar-times',
    items: [
      {
        label: "Список",
        icon: "pi pi-fw pi-align-justify",
        command: async () => {
          await navigateTo("/admin/settings");
        },
      },
      {
        label: "Менеджеры",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "Изменить существующих",
            icon: "pi pi-fw pi-user-edit",
            command: async() => {
              await navigateTo('/admin/managers')
            }
          }
          // {
          //   label: "Добавить",
          //   icon: "pi pi-fw pi-user-plus",
          //   command: async() => {
          //     await navigateTo('/admin/managers/new')
          //   }
          // }
        ]
      }
    ],
  });
}

items.value.push({
  label: "Выйти",
  icon: "pi pi-fw pi-power-off",
  command: () => {
    localStorage.removeItem("jwt");
  },
});
// const toast = useToast();
</script>

<template>
  <div class="card">
    <Menubar :model="items" />
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
