<script setup lang="ts">
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

import BlockUI from "primevue/blockui";

try {
  if (!checkRules(readJWT(localStorage.getItem("jwt")!), "Product.Edit")) {
    await navigateTo("/auth");
  }
} catch (e) {
  await navigateTo("/auth");
}

const toast = useToast();

const layout = "admin";

const state = reactive({
  isLoading: true,
  newUser: {
    login: "",
    password: "",
    status: "",
  },
  ans: "",
});

async function onSave() {
  state.isLoading = true;
  state.ans = await $fetch("/api/admin/users", {
    method: "POST",
    body: {
      jwtToken: localStorage.getItem("jwt"),
      newUser: {
        login: state.newUser.login,
        password: createPass(state.newUser.password),
        status: state.newUser.status,
      },
    },
  }).catch(adminApiErrorHandler);

  toast.add({
    severity: "success",
    summary: "Пользователь был добавлен!",
    detail: `id нового пользователя: ${state.ans}`,
    closable: true,
    life: 5000,
  });

  setTimeout(() => navigateTo("/admin/user/list"), 6000);

  state.isLoading = false;
}

state.isLoading = false;
</script>

<template>
  <ClientOnly>
    <NuxtLayout :name="layout">
      <Toast />
      <BlockUI :blocked="state.isLoading">
        <div class="content-wall">
          <table>
            <tr>
              <td>Логин</td>
              <td>
                <InputText
                  v-model="state.newUser.login"
                  placeholder="Введите логин"
                ></InputText>
              </td>
            </tr>
            <tr>
              <td>Пароль</td>
              <td>
                <Password
                  name="password"
                  v-model="state.newUser.password"
                  :feedback="false"
                />
              </td>
            </tr>
            <tr>
              <td>Статус пользователя</td>
              <td>
                <Dropdown
                  v-model="state.newUser.status"
                  :options="['editor', 'phPerson', 'juPerson']"
                ></Dropdown>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <Button
                  label="Сохранить"
                  icon="pi pi-check"
                  @click="onSave"
                  :disabled="state.isLoading"
                />
              </td>
            </tr>
          </table>
        </div>
      </BlockUI>
    </NuxtLayout>
  </ClientOnly>
</template>
