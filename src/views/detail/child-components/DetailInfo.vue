<template>
  <div>
    <div
      class="detail-info-box"
      v-if="Object.keys(goodsDetail.itemInfo).length !== 0"
    >
      <span class="info-price">￥{{ goodsDetail.itemInfo.price }}</span>
      <span class="info-price-old">￥{{ goodsDetail.itemInfo.oldPrice }}</span>
      <div class="info-title">{{ goodsDetail.itemInfo.title }}</div>
      <div class="flex-around-ctr">
        <div class="flex-ctr detail-info-tip">
          <img src="~assets/img/index/recommend.png" alt="" />
          <span class="col-b9b7b7">推荐</span>
        </div>
        <div class="flex-ctr detail-info-tip">
          <img src="~assets/img/index/help-me-choose.png" alt="" />
          <span class="col-b9b7b7">帮我选</span>
        </div>
        <div class="flex-ctr detail-info-tip">
          <img src="~assets/img/index/share.png" alt="" />
          <span class="col-b9b7b7">分享</span>
        </div>
      </div>
    </div>
    <div class="detail-parameter fs12">
      <div class="flex-btn-ctr">
        <div class="col-b9b7b7">发货</div>
        <div class="parameter-right flex-btn-ctr">
          <div>地址：广东广州 | 快递：免运费</div>
          <div class="col-b9b7b7">月销：XX</div>
        </div>
      </div>
      <div class="flex-btn-ctr">
        <div class="col-b9b7b7">保障</div>
        <div class="parameter-right flex-btn-ctr">
          <div>付款后45天内发货·不支持7天无理由</div>
          <img
            class="right-arrow"
            src="~assets/img/index/right-arrow.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex-btn-ctr">
        <div class="col-b9b7b7">活动</div>
        <div class="parameter-right flex-btn-ctr">
          <div>开卡领5元通用红包！</div>
          <img
            class="right-arrow"
            src="~assets/img/index/right-arrow.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex-btn-ctr">
        <div class="col-b9b7b7">参数</div>
        <div class="parameter-right flex-btn-ctr">
          <div>品牌、材质...</div>
          <img
            class="right-arrow"
            src="~assets/img/index/right-arrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
.detail-info-box,
.detail-parameter {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
}
.detail-info-box {
  padding: 10px;
  box-sizing: border-box;
  margin-top: 15px;
}
.info-price {
  color: var(--color-high-text);
}
.info-price-old {
  color: #b8b3b3;
  font-size: 10px;
  text-decoration: var(--text-decoration);
  margin-left: 10px;
}
.info-title {
  color: #000;
  font-size: var(--font-size);
  margin-top: 5px;
  line-height: var(--line-height);
}
.detail-info-tip {
  margin-top: 10px;
}
.detail-info-tip img {
  width: 15px;
  height: 15px;
}
.detail-info-tip span {
  font-size: 10px;
  margin-left: 5px;
}
.detail-parameter > div {
  height: 30px;
  line-height: 30px;
}

.parameter-right {
  width: calc(100vw - 80px);
}
</style>
