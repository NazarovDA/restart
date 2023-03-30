<template>
  <div class="content-zone">
    <div class="content">
      <div class="content-up-stripe"></div>
      <div class="content-wall">
        <div class="breadcrumb">
          <p id="breadcrumbs">
            <span class="breadcrumb_last">Контакты</span>
          </p>
        </div>
        <h3 style="text-align: left">Наш склад находится по адресу:</h3>
        <h3>Санкт-Петербург, Софийская улица, дом 99</h3>
        <h3>
          <span style="text-decoration: underline"
            ><span style="color: #799a19; text-decoration: underline"
              ><a
                style="color: #799a19; text-decoration: underline"
                href="http://tdrestart.ru/map/"
                >Схема проезда</a
              ></span
            ></span
          >
        </h3>
        <h3 style="font-weight: bold; text-align: left"><strong>Коммерческий отдел</strong></h3>
        <h3 style="text-align: left">Телефон:&nbsp;+7 (812) 241-15-08</h3>
        <h3 style="text-align: left">
          Татинцян Армине Спартаковна &nbsp;т. +7 (921) 653-53-52, e-mail:
          <NuxtLink class="link" to="mailto:arm@tdrestart.ru">arm@tdrestart.ru</NuxtLink>
        </h3>
        <h3 style="text-align: left">
          Астапова Светлана Дмитриевна&nbsp; т. +7 (953) 351-67-69, e-mail:
          <NuxtLink class="link" to="mailto:sv@tdrestart.ru">sv@tdrestart.ru</NuxtLink>
        </h3>
        <h3>
          Давиденко Сергей Юрьевич&nbsp; т.&nbsp;+7 (931) 360-99-94,
          e-mail:
          <NuxtLink class="link" to="mailto:ser@tdrestart.ru">ser@tdrestart.ru</NuxtLink>
        </h3>
        <p>&nbsp;</p>
        <h3>
          Режим работы офиса и склада: c&nbsp;9-00 до 17-00&nbsp;(Пн, Вт, Ср,
          Чт), с 9-00 до 16-00 (Пт)
        </h3>
      </div>
      <div class="content-down-stripe"></div>
    </div>
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

.link {
  text-decoration: underline;
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