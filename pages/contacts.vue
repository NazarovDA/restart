<script setup lang="ts">
const state = reactive({
  settings: await getSettings(),
  managers: await getManagers(),
});
</script>

<template>
  <div class="content">
    <div class="content-up-stripe"></div>
    <div class="content-wall">
      <div class="breadcrumb">
        <p id="breadcrumbs">
          <span class="breadcrumb_last">Контакты</span>
        </p>
      </div>
      <h3 style="text-align: left">Наш склад находится по адресу:</h3>
      <h3>{{ state.settings.address }}</h3>
      <h3>
        <span style="text-decoration: underline"
          ><span style="color: #799a19; text-decoration: underline"
            ><NuxtLink
              style="color: #799a19; text-decoration: underline"
              to="/map"
              >Схема проезда</NuxtLink
            ></span
          ></span
        >
      </h3>
      <h3 style="font-weight: bold; text-align: left">
        <strong>Коммерческий отдел</strong>
      </h3>
      <h3 style="text-align: left">
        Телефон:
        <NuxtLink :to="'tel:' + state.settings.phone">{{
          state.settings.phone
        }}</NuxtLink>
      </h3>
      <h3 v-for="manager in state.managers" style="text-align: left">
        {{ manager.fio }} &nbsp;т.
        <NuxtLink :to="'tel:' + manager.phone">{{ manager.phone }}</NuxtLink
        >, e-mail:
        <NuxtLink class="link" :to="'mailto:' + manager.email">{{
          manager.email
        }}</NuxtLink>
      </h3>
      <p>&nbsp;</p>
      <h3><span>Часы работы: </span> {{ state.settings.timeOfWork }}</h3>
    </div>
    <div class="content-down-stripe"></div>
  </div>
</template>
