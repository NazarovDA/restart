<script setup lang="ts">
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";

import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const router = useRouter();

const username = ref("");
const password = ref("");

let res = ref("");

async function login() {
  try {
    res.value = await $fetch("/api/auth", {
      body: {
        login: username.value.trimEnd(),
        pass: createPass(password.value),
      },
      method: "POST",
    });

    if (res) {
      localStorage.setItem("jwt", res.value);
    }
    toast.add({
      closable: true,
      life: 3000,
      severity: "success",
      summary: "Успешно",
    });
    router.back();
  } catch (error) {
    console.info(error);
    toast.add({
      closable: true,
      life: 3000,
      severity: "warn",
      summary: "Ошибка авторизации",
      detail: "Неверный логин или пароль",
    });
  }
}
</script>

<template>
  <Toast />
  <ClientOnly>
    <div class="card flex flex-column md:flex-row gap-3">
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon"> Логин </span>
        <InputText name="username" v-model="username" placeholder="Логин" />
      </div>
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">Пароль</span>
        <Password name="password" v-model="password" :feedback="false" />
      </div>
    </div>
    <Button label="Войти" rounded raised @click="login" />
  </ClientOnly>
</template>

<style>
.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
