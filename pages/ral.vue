<template>
  <div>
    <div class="content">
      <div class="content-up-stripe"></div>
      <div class="content-wall">
        <div class="breadcrumb">
          <p id="breadcrumbs">
            <span class="breadcrumb_last">Каталог RAL</span>
          </p>
        </div>
        <p>
          <img
            class="wp-image-106 alignnone"
            src="@/img/ral1.jpg"
            alt="ral1"
            width="635"
            height="1228"
            srcset="
              @/img/ral1.jpg          635w,
              @/img/ral1-155x300.jpg  155w,
              @/img/ral1-530x1024.jpg 530w
            "
            sizes="(max-width: 635px) 100vw, 635px"
          />
        </p>
      </div>
      <div class="content-down-stripe"></div>
    </div>
  </div>
</template>

<style scoped>
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
.breadcrumb_last {
  text-align: left;
  color: #799a19;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

.breadcrumbs {
  text-align: left;
  color: #799a19;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-bottom: 0 !important;
}
#breadcrumbs{
    text-align: left;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    color: #799a19;
    font-size: 14px;
    font-family: "Open Sans";
    font-weight: 600;
    margin-bottom: 10px;
}
</style>