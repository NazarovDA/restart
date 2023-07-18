<script setup lang="ts">
  import { Settings } from 'types/settings';
  const props = defineProps<{settings: Settings}>()
</script>

<template>
  <section class="row footer">
    <div class="cntr">
      <img src="@/img/logof.png" alt="" class="footer-logo" />
      <div class="footer-contact-block">
        <div class="left-side">
          <p class="footer-contact-row">
            <span>Электронная почта: </span>
            <NuxtLink :to="'mailto:'+props.settings.email">
              {{ props.settings.email }}
            </NuxtLink>
          </p>
          <br />
          <p class="footer-contact-row">
            <span>Телефон: </span><NuxtLink :to="'tel:'+props.settings.phone">{{ props.settings.phone }}</NuxtLink>
          </p>
          <br />
          <p class="footer-contact-row">
            <span>Часы работы: </span> {{ props.settings.timeOfWork }}
          </p>
          <br />
        </div>
        <div class="right-side">
          <p class="footer-contact-row">
            <span>Aдрес: </span> {{ props.settings.address }}
          </p>
          <br />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
