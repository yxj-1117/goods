<template>
  <div class="shopping-cart-card flex-btn-ctr">
    <img
      class="select-icon"
      src="~assets/img/shopping-cart/unSelect.png"
      alt=""
    />
    <img class="shop-img" src="~assets/img/index/shop.png" alt="" />
    <div class="card-right-info flex-col-btn">
      <div class="fs12">菲律宾进口香蕉</div>
      <div class="flex-btn-ctr">
        <div class="fs12">
          ￥8.8<span class="shop-oldPrice text-de">￥9.9</span>
        </div>
        <div class="flex-ctr calculation-box">
          <div>-</div>
          <div class="fs12">1</div>
          <div>+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
.shopping-cart-card {
  height: 100%;
  border-radius: 10px;
  height: 80px;
  background-color: var(--color-background);
  padding: 15px;
  box-sizing: border-box;
}
.select-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.shop-img {
  height: 50px;
  height: 50px;
  border-radius: 50%;
}
.card-right-info {
  width: calc(100vw - 140px);
  height: 100%;
}
.calculation-box {
  height: 20px;
  border-radius: 10px;
  border: 1px solid #cac7c7;
}
.calculation-box div:first-child,
.calculation-box div:last-child {
  height: 100%;
  padding: 0 10px;
  text-align: center;
  box-sizing: border-box;
}
.calculation-box div:first-child {
  border-right: 1px solid #cac7c7;
}
.calculation-box div:last-child {
  border-left: 1px solid #cac7c7;
}
.calculation-box div:nth-child(2) {
  padding: 0 5px;
  text-align: center;
}
.shop-oldPrice {
  display: inline-block;
  transform: scale(0.8);
  color: #b8b3b3;
}
</style>
