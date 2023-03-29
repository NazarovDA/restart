<template>
  <div id="wrapper">
    <section class="row header">
      <div class="container">
        <a href="https://tdrestart.ru">
          <img
            src="https://tdrestart.ru/wp-content/themes/tdrestart/img/logo.png"
            alt="Торговый Дом Рестарт"
            class="logo"
          />
        </a>
        <div class="header-contact-block">
          <p class="header-contact-row">
            <span>Aдрес: </span>Санкт-Петербург, <br />Софийская ул., дом 99
          </p>
          <br />
          <p class="header-contact-row">
            <span>Электронная почта: </span
            ><a href="mailto:mail@tdrestart.ru">mail@tdrestart.ru</a>
          </p>
          <br />
          <p class="header-contact-row">
            <span>Телефон: </span>+7(812)241-15-08
          </p>
          <br />
          <p class="header-contact-row">
            <span>Часы работы: </span>с 9 до 17 (Пн - Чт), (Пт) до 16
          </p>
          <br />
        </div>
      </div>
    </section>
    <section class="row-menu">
      <div class="container">
        <div class="phone-container">
          <div class="phone-icon"></div>
          +7(812)241-15-08
        </div>
        <ul class="nav">
          <NuxtLink to="about">О компании </NuxtLink>
          <NuxtLink to="price">Стоимость </NuxtLink>
          <NuxtLink to="ral">Каталог Ral </NuxtLink>
          <NuxtLink to="contacts">Контакты </NuxtLink>
          <NuxtLink to="map">Схема проезда </NuxtLink>
        </ul>
      </div>
    </section>
  </div>
  <slot />
</template>

<style>
.row-menu {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  display: block;
  box-sizing: border-box;
  background-color: #454545;
  color: #fff;
  width: 100%;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.container {
  color: #fff;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto 0;
  text-align: center;
  height: 38px;
}

.phone-container {
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 42px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
}

.nav {
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  list-style: none;
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.row-header {
  color: #454545;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  display: block;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.logo {
  text-align: center;
  color: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  float: left;
  display: block;
}

.header-contact-block {
  color: #454545;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  text-align: right;
  font-size: 12px;
}

.header-contact-row {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: inline-block;
  text-align: right;
  color: #8b8a8a;
  line-height: 19px;
}

.wrapper {
  color: #454545;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-image: url("../img/bg.jpg");
  min-height: 100%;
  padding-bottom: 148px;
}
</style>
