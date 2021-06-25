<template>
  <div id="index">
    <nav-bar class="index-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper :bannersList="bannersList"></swiper>
    <recommend-view :recommendList="recommendList"></recommend-view>
    <div>
      <div class="index-best-sellers">本周热卖</div>
      <feature-view :featurelist="featurelist"></feature-view>
    </div>
    <tab-control
      class="index-tab-control"
      :tabTitles="tabTitles"
      @clickTab="clickTab"
    ></tab-control>
    <goods-list :goodsBox="showGoods"></goods-list>
  </div>
</template>
<script>
import Swiper from "./child-components/Swiper";
import RecommendView from "./child-components/RecommendView";
import FeatureView from "./child-components/FeatureView";

import NavBar from "components/common/nav-bar/NavBar";
import TabControl from "components/content/tab-control/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { banners, recommend, feature, goods } from "@/api/index";

export default {
  components: {
    Swiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      bannersList: [], //轮播图
      recommendList: [], //推荐
      featurelist: [], //本周热卖
      tabTitles: [
        //tab
        {
          label: "华为",
        },
        {
          label: "水果",
        },
        {
          label: "精选",
        },
      ],
      tabType: "huawei",
      goodsBox: {}, //商品
    };
  },
  created() {
    this.init();
  },
  computed: {
    showGoods() {
      return this.goodsBox[this.tabType];
    },
  },
  methods: {
    init() {
      this.bannersList = [];
      banners().then((res) => {
        if (res.code === 200) {
          this.bannersList = res.data;
        }
      });
      this.recommendList = [];
      recommend().then((res) => {
        if (res.code === 200) {
          this.recommendList = res.data;
        }
      });
      this.featurelist = [];
      feature().then((res) => {
        if (res.code === 200) {
          this.featurelist = res.data;
        }
      });
      this.getGoods();
    },
    getGoods() {
      this.goodsBox = new Object();
      goods().then((res) => {
        if (res.code === 200) {
          this.goodsBox = res.data;
        }
      });
    },
    clickTab(index) {
      this.getGoods();
      let arr = ["huawei", "fruits", "selected"];
      this.tabType = arr[index];
    },
  },
};
</script>
<style scoped>
#index {
  padding: 44px 0 49px 0;
}
.index-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.carousel-map-box {
  width: 100vw;
}
.carousel-map-box img {
  width: 100%;
}
.index-best-sellers {
  margin: 20px 0 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #000;
}
.index-tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 2;
}
</style>
