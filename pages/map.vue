<script setup lang="ts"></script>

<template>
  <div class="content-wall">
    <div class="breadcrumb">
      <p id="breadcrumbs">
        <span class="breadcrumb_last">Схема проезда</span>
      </p>
    </div>
    <h2 style="text-align: center">
      Мы находимся по адресу Санкт-Петербург,&nbsp;Софийская ул. дом 99
    </h2>

    <p style="text-align: center">
      <a download="Софийская_схема.jpg" href="@/img/Софийская_схема.jpg">
        <img
          class="aligncenter size-full wp-image-1002"
          src="@/img/Софийская_схема.jpg"
          alt="Софийская_схема"
          width="397"
          height="482"
          srcset="
            @/img/Софийская_схема.jpg         397w,
            @/img/Софийская_схема-247x300.jpg 247w
          "
          sizes="(max-width: 397px) 100vw, 397px"
        />
      </a>
      <br />
      <label> Нажмите на картинку, чтобы сохранить ее! </label>
    </p>

    <p>&nbsp;</p>
    <p>
      <iframe
        src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3A150ace65ba9ff1990b15b0b627e525bd4f3765665464966d27c7946ee7509cc7"
        frameborder="0"
        allowfullscreen="true"
        width="778px"
        height="655px"
        style="display: block"
      ></iframe>
    </p>
  </div>
</template>
