<template>
  <div>
    <div class="detail-evaluate">
      <div class="flex-btn-ctr evaluate-top-box">
        <div class="evaluate-title">宝贝评价（139）</div>
        <div class="flex-ctr">
          <div class="fs12 mgn_r5 col-ff8198">查看全部</div>
          <img
            class="right-arrow"
            src="~assets/img/index/right-arrow-evaluate.png"
            alt=""
          />
        </div>
      </div>
      <div class="evaluate-label-box flex-ctr-wrap-hidden">
        <div v-for="(item, index) in 3" :key="index">快点买就对了</div>
      </div>
      <div class="evaluate-list">
        <div v-for="(item, index) in 2" :key="index">
          <div class="evaluate-info flex-ctr">
            <img src="~assets/img/index/back-top .png" alt="" />
            <div style="height: 30px" class="flex-col-btn">
              <div class="fs12">沫沫**舞</div>
              <div class="fs12 col-b9b7b7">14天前</div>
            </div>
          </div>
          <div class="evaluate-content fs12">好，很好，特别好</div>
        </div>
      </div>
    </div>
    <div class="detail-shop">
      <div class="shop-info flex-btn">
        <div class="flex-ctr">
          <img class="shop-logo" src="~assets/img/index/shop.png" alt="" />
          <div class="flex-col-btn" style="height: 40px">
            <div class="shop-name fs14">XXXX店</div>
            <div class="shop-tip">精选</div>
          </div>
        </div>
        <div class="shop-score fs12 flex-col-btn">
          <div>宝贝描述4.8 <span class="col-b9b7b7">平</span></div>
          <div>卖家服务4.8 <span class="col-b9b7b7">平</span></div>
          <div>物流服务4.8 <span class="col-b9b7b7">平</span></div>
        </div>
      </div>
      <div class="shop-btn-box flex-ctr">
        <div class="fs12">进店逛逛</div>
        <div class="fs12">全部宝贝</div>
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
.detail-evaluate,
.detail-shop {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
}
.evaluate-top-box {
  padding: 15px 0;
}
.evaluate-title {
  font-size: 14px;
  color: #000;
  font-weight: 500;
}
.evaluate-label-box {
  height: 24px;
  width: 100%;
}
.evaluate-label-box div {
  height: 24px;
  padding: 0 10px;
  font-size: 12px;
  color: #000;
  line-height: 24px;
  background-color: rgb(243, 169, 169);
  margin-right: 15px;
  border-radius: 12px;
}
.evaluate-list {
  margin-top: 15px;
}
.evaluate-info img {
  height: 30px;
  width: 30px;
}
.evaluate-content {
  color: #000;
  padding: 10px 0;
}
.detail-shop {
  width: 100%;
  padding-bottom: 15px;
}
.shop-info {
  padding: 15px 0;
}
.shop-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.shop-name {
  font-weight: 600;
  color: #000;
}
.shop-tip {
  padding: 0 5px;
  font-size: 12px;
  background-color: red;
  color: #fff;
  width: 40px;
  text-align: center;
  border-radius: 8px;
  line-height: 16px;
  height: 16px;
  transform: scale(0.8);
}
.shop-score {
  color: #333;
  height: 40px;
}
.shop-score div {
  transform: scale(0.8);
}
.shop-btn-box {
  width: 100%;
  justify-content: center;
}
.shop-btn-box div {
  line-height: 24px;
  height: 24px;
  padding: 0 10px;
  border-radius: 12px;
  border: 1px solid var(--color-high-text);
  color: var(--color-high-text);
  margin: 0 10px;
}
</style>
