<script setup lang="ts">
const err = useError();

const err_code = (err.value as any)?.statusCode;
</script>

<template>
  <NuxtLayout name="default">
    <div class="content">
      <div class="content-up-stripe"></div>
      <div class="content-wall">
        <div class="breadcrumb">
          <p id="breadcrumbs">
            <span class="breadcrumb_last">Ошибка {{ err_code }}</span>
          </p>
        </div>
        <span v-if="err_code == 404">Страница не найдена.</span>
      </div>
      <div class="content-down-stripe"></div>
    </div>
  </NuxtLayout>
</template>
