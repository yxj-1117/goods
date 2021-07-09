<template>
  <div class="detail-bottom-bar">
    <div class="bottom-bar-box flex-ctr">
      <div class="bottom-bar-left flex-ctr">
        <div class="flex-col-btn-ctr">
          <img src="~assets/img/index/shop.png" alt="" />
          <div class="fs12">店铺</div>
        </div>
        <div class="flex-col-btn-ctr">
          <img src="~assets/img/index/customer-service.png" alt="" />
          <div class="fs12">客服</div>
        </div>
        <div class="flex-col-btn-ctr">
          <img src="~assets/img/index/collection .png" alt="" />
          <div class="fs12">收藏</div>
        </div>
      </div>
      <div class="bottom-bar-right flex-ctr">
        <div class="bottom-bar-btn-left">
          <div class="fs14">加入购物车</div>
        </div>
        <div class="bottom-bar-btn-right">
          <div class="fs14">立即购买</div>
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
.detail-bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  padding: 5px 0 8px;
  box-sizing: border-box;
}
.bottom-bar-box,
.bottom-bar-left,
.bottom-bar-right {
  height: 100%;
}
.bottom-bar-left > div {
  width: calc(40vw / 3);
  height: 100%;
}
.bottom-bar-left img {
  width: 20px;
  height: 20px;
}
.bottom-bar-right {
  width: 60vw;
  padding: 0 10px;
  box-sizing: border-box;
}
.bottom-bar-btn-left,
.bottom-bar-btn-right {
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 36px;
}
.bottom-bar-btn-left div,
.bottom-bar-btn-right div {
  transform: scale(0.9);
  color: #fff;
}
.bottom-bar-btn-left {
  background-image: linear-gradient(
    to bottom right,
    #f7c639,
    #f7b935,
    #f6b237,
    #f9972c,
    #f9952e
  );
  border-radius: 18px 0 0 18px;
}
.bottom-bar-btn-right {
  background-image: linear-gradient(to bottom right, #ff8198, #ff5777);
  border-radius: 0 18px 18px 0;
}
</style>
