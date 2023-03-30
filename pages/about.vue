<template>
    <div class="content">
      <div class="content-up-stripe"></div>
      <div class="content-wall">
        <div class="breadcrumb">
          <p id="breadcrumbs">
            <span class="breadcrumb_last">О компании</span>
          </p>
        </div>
        <h3>
          ООО «ТД «Рестарт»&nbsp;является одной из ведущих компаний на рынке
          Северо-Западного региона России занимающейся поставками лакокрасочной
          продукции, сырья для производства ЛКМ и производства
          смесовых&nbsp;растворителей.<br />
          Наша компания имеет постоянные договорные и дилерские отношения с
          большинством ведущих производителей лакокрасочной продукции,
          производителей компонентов для ЛКМ и нефтехимическими предприятиями.
        </h3>
        <h3>
          Ключевые сотрудники нашей организации профессионально работают на
          рынке поставок химического сырья и реализации лакокрасочных материалов
          более 10 лет с большим количеством предприятий – потребителей
          лакокрасочной и нефтехимической продукции. В нашей компании имеется
          собственный грузовой и легковой автомобильный парк для оперативной
          доставки грузов.
        </h3>
        <h3>
          В связи с успешным развитием коммерческого направления и для более
          полного удовлетворения потребностей клиентов и партнеров, наша
          компания постоянно развивается и открывает новые направления
          сотрудничества.
        </h3>
      </div>
      <div class="content-down-stripe"></div>
    </div>
</template>

<style>
.content-wall {
  padding: 5px 40px 32px 30px;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  font-family: "Roboto"; }

.content-wall p {
  margin-bottom: 24px; }

.content-up-stripe {
  width: 839px;
  height: 18px;
  background-color: #fff;
  position: absolute;
  right: 18px;
  top: 0; }

.content-up-stripe::before {
  content: "";
  position: absolute;
  border: 9px solid #fff;
  border-top-color: transparent;
  border-right-color: transparent;
  height: 0;
  width: 0;
  top: 0px;
  right: -18px; }

.content-down-stripe {
  width: 839px;
  height: 18px;
  background-color: #fff;
  position: absolute;
  left: 18px;
  bottom: 0; }

.content-down-stripe::before {
  content: "";
  position: absolute;
  border: 9px solid #fff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  height: 0;
  width: 0;
  top: 0px;
  left: -18px; }

.content-wall {
  color: #454545;
  margin: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  background-color: #fff;
  height: calc(100% - 36px);
  width: 857px;
  padding: 5px 40px 32px 30px;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  font-family: "Roboto";
}
</style>