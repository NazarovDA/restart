
<template>
  <div id="wrapper">
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
            ><NuxtLink to="mailto:mail@tdrestart.ru">mail@tdrestart.ru</NuxtLink>
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
          <li id="menu-item-23" class="button">
            <NuxtLink to="/about">О компании</NuxtLink>
          </li>
          <li id="menu-item-22" class="button">
            <NuxtLink to="/price">Стоимость</NuxtLink>
          </li>
          <li id="menu-item-24" class="button">
            <NuxtLink to="/ral">Каталог RAL</NuxtLink>
          </li>
          <li id="menu-item-20" class="button">
            <NuxtLink to="/contacts">Контакты</NuxtLink>
          </li>
          <li id="menu-item-21" class="button">
            <NuxtLink to="/map">Схема проезда</NuxtLink>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <slot />
    </section>
    <section class="row footer">
      <div class="cntr">
        <img
          src="@/img/logof.png"
          alt=""
          class="footer-logo"
        />
        <div class="footer-contact-block">
          <div class="left-side">
            <p class="footer-contact-row">
              <span>Электронная почта: </span
              ><NuxtLink href="mailto:mail@tdrestart.ru">mail@tdrestart.ru</NuxtLink>
            </p>
            <br />
            <p class="footer-contact-row">
              <span>Телефон: </span>+7(812)241-15-08
            </p>
            <br />
            <p class="footer-contact-row">
              <span>Часы работы: </span>с 9 до 17 (Пн - Чт), (Пт) до 16
            </p>
            <br />
          </div>
          <div class="right-side">
            <p class="footer-contact-row">
              <span>Aдрес: </span>Санкт-Петербург, <br />Софийская ул., дом 99
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,600&subset=latin,cyrillic);
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

#wrapper {
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

@font-face {
  font-family: "Roboto";
  src: local("Roboto"), local("Roboto-Regular"),
    url("../assets/roboto.woff2") format("woff2"),
    url("../assets/roboto.woff") format("woff"),
    url("../assets/roboto.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

.button {
  color: #fff;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  float: left;
  height: 100%;
  position: relative;
  transform-origin: 50% 50%;
  transform: skew(20deg);
  border-right: 2px solid #fff;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block; }

body {
  line-height: 1; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

html {
  height: 100%;
}

body {
  font-family: "Roboto";
  width: 100%;
  height: 100%;
  color: #454545;
}

a {
  text-decoration: none;
  color: inherit;
}

div,
section,
ul,
li,
a,
input,
textarea {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

div.cntr {
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto 0;
  text-align: center;
}


.header .cntr {
  height: 154px;
  padding: 34px 37px 0 66px;
  background-image: url("../img/menu-bg.png");
  background-repeat: no-repeat;
  background-position: 278px 28px;
}

.header .cntr .logo {
  float: left;
  display: block;
}

.header-contact-block {
  text-align: right;
  font-size: 12px;
}

.header-contact-row {
  display: inline-block;
  text-align: right;
  color: #8b8a8a;
  line-height: 19px;
}

.header-contact-row span {
  color: #454545;
}

.header-contact-row a {
  text-decoration: underline;
}

.header-contact-row a:hover {
  color: #798e2f;
}

.main-menu {
  background-color: #454545;
  color: #fff;
}

.main-menu .cntr {
  height: 38px;
}

.main-menu .phone-container {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 42px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600;
}

.main-menu .phone-container::before,
.main-menu .phone-container::after {
  content: "";
  width: 4px;
  position: absolute;
  height: 60px;
  border: 2px solid #fff;
  border-top: none;
  border-bottom: none;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: rotate(-20deg);
  -ms-transform: rotate(-20deg);
  transform: rotate(-20deg);
}

.main-menu .phone-container::before {
  top: -30px;
  left: -34px;
}

.main-menu .phone-container::after {
  top: -30px;
  right: -50px;
}

.main-menu .phone-container .phone-icon {
  display: inline-block;
  background-image: url("../img/sprites.png");
  background-position: -8px -48px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 11px;
}

.main-menu ul.nav {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.main-menu .nav li {
  float: left;
  height: 100%;
  position: relative;
  transform-origin: 50% 50%;
  transform: skew(20deg);
  border-right: 2px solid #fff;
}

.main-menu .nav li a {
  font-family: "Open Sans";
  text-transform: uppercase;
  font-size: 13px;
  display: block;
  height: 100%;
  width: 100%;
  font-weight: 600;
  padding: 12px 42px 0;
  transform-origin: 50% 50%;
  transform: skew(-20deg);
}

.main-menu .nav li:hover {
  background-color: #7c7b7b;
}

.footer {
  background-color: #454545;
  bottom: 0;
  left: 0;
}

.footer .cntr {
  height: 148px;
  padding: 50px 45px 38px 67px;
  background-image: url("../img/footer-bg.png");
  background-repeat: no-repeat;
  background-position: 15px 0;
}

img.footer-logo {
  float: left;
}

.footer-contact-block {
  height: 100%;
  font-size: 12px;
  margin-left: 95px;
  float: left;
}

.footer-contact-block .left-side {
  width: 310px;
  height: 100%;
  float: left;
  text-align: left;
  padding-top: 1px;
}

.footer-contact-block .right-side {
  width: 310px;
  height: 100%;
  float: left;
  text-align: left;
  padding-top: 22px;
}

.footer-contact-row {
  color: #fff;
  opacity: 0.55;
  text-align: left;
  line-height: 20px;
  display: inline-block;
}

.footer-contact-row span {
  color: #a3ca1d;
}

.footer-contact-row a {
  text-decoration: underline;
}

.footer-contact-row a:hover {
  color: #a3ca1d;
}
</style>