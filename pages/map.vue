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

<style>
.content {
  position: relative;
  padding-top: 18px;
  padding-bottom: 18px;
  height: 100%;
}

.content-wall {
  background-color: #fff;
  height: calc(100% - 36px);
  width: 857px;
}
.breadcrumb {
  color: #799a19;
  font-size: 14px;
  font-family: "Open Sans";
  font-weight: 600;
  margin-bottom: 10px;
}
.breadcrumb p {
  margin-bottom: 0 !important;
}
.content-up-stripe {
  width: 839px;
  height: 18px;
  background-color: #fff;
  position: absolute;
  right: 18px;
  top: 0;
}

.content-up-stripe::before {
  content: "";
  position: absolute;
  border: 9px solid #fff;
  border-top-color: transparent;
  border-right-color: transparent;
  height: 0;
  width: 0;
  top: 0px;
  right: -18px;
}

.content-down-stripe {
  width: 839px;
  height: 18px;
  background-color: #fff;
  position: absolute;
  left: 18px;
  bottom: 0;
}

.content-down-stripe::before {
  content: "";
  position: absolute;
  border: 9px solid #fff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  height: 0;
  width: 0;
  top: 0px;
  left: -18px;
}
.content-wall {
  padding: 5px 40px 32px 30px;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  font-family: "Roboto";
}

.content-wall p {
  margin-bottom: 24px;
}
.content-wall h3 {
  color: #454545;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  text-align: left;
}
</style>