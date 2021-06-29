<template>
  <div id="index">
    <nav-bar class="index-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
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
    </scroll>
    <back-top @click.native="clickBackTop" v-if="isShowBackTopImg" />
  </div>
</template>
<script>
import Swiper from "./child-components/Swiper";
import RecommendView from "./child-components/RecommendView";
import FeatureView from "./child-components/FeatureView";

import NavBar from "components/common/nav-bar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tab-control/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/back-top/BackTop";

import { banners, recommend, feature, goods } from "@/api/index";
export default {
  components: {
    Swiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
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
      isShowBackTopImg: false,
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
    // 切换tab
    clickTab(index) {
      this.getGoods();
      let arr = ["huawei", "fruits", "selected"];
      this.tabType = arr[index];
    },
    // 回到顶部 -- 点击返回顶部的图标
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // scroll内容滚动
    contentScroll(position) {
      this.isShowBackTopImg = -position.y > 200;
    },
    // 上拉加载更多
    loadMore() {
      goods().then((res) => {
        if (res.code === 200) {
          this.goodsBox[this.tabType] = this.goodsBox[this.tabType].concat(
            res.data.huawei
          );
        }
      });
      this.$refs.scroll.finishPullUp();
      // 为了重新计算scroll内部的高度
      this.$refs.scroll.scroll.refresh();
      console.log("上拉加载更多");
    },
  },
  mounted() {},
};
</script>
<style scoped>
#index {
  padding: 44px 0 49px 0;
  box-sizing: border-box;
  height: 100vh;
}
.scroll-content {
  height: calc(100vh - 93px);
  overflow: hidden;
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
