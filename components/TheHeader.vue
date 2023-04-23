<template>
  <section class="row header">
    <div class="cntr">
      <NuxtLink to="/"
        ><img
          src="@/img/logo.png"
          alt="Торговый Дом Рестарт"
          class="logo"
      /></NuxtLink>
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
        <p class="header-contact-row"><span>Телефон: </span>+7(812)241-15-08</p>
        <br />
        <p class="header-contact-row">
          <span>Часы работы: </span>с 9 до 17 (Пн - Чт), (Пт) до 16
        </p>
        <br />
      </div>
    </div>
  </section>
  <section class="row main-menu">
    <div class="cntr">
      <div class="phone-container">
        <div class="phone-icon"></div>
        +7(812)241-15-08
      </div>

      <ul
        id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e"
        class="nav clearfix"
      >
        <li
          id="menu-item-23"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23"
        >
          <NuxtLink to="/about">О компании</NuxtLink>
        </li>
        <li
          id="menu-item-22"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22"
        >
          <NuxtLink to="/price">Стоимость</NuxtLink>
        </li>
        <li
          id="menu-item-24"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24"
        >
          <NuxtLink to="/ral">Каталог RAL</NuxtLink>
        </li>
        <li
          id="menu-item-20"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"
        >
          <NuxtLink to="/contacts">Контакты</NuxtLink>
        </li>
        <li
          id="menu-item-21"
          class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-14 current_page_item menu-item-21"
        >
          <NuxtLink to="/map">Схема проезда</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
