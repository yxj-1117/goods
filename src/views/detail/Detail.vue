<template>
  <div id="detail">
    <div class="detail-nav">
      <detail-nav-bar :current-index="currentIndex" @clickTitle="clickTitle" />
    </div>
    <scroll
      ref="scroll"
      class="scroll-content"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <div style="padding: 0 10px; box-sizing: border-box">
        <detail-swiper class="detail-swiper-box" :top-banners="topBanners" />
        <detail-info v-if="goodsDetail" :goods-detail="goodsDetail" />
        <detail-evaluate ref="evaluate" />
        <detail-image-info
          ref="imageInfo"
          :detail-image-info="detailImageInfo"
          @detailImageInfoLoad="detailImageInfoLoad"
        />
      </div>
      <detail-recommend :detail-recommend="detailRecommend" ref="recommend" />
    </scroll>
    <detail-bottom />
    <back-top @click.native="clickBackTop" v-if="isShowBackTopImg" />
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import { itemListenerMixin, backTopMixin } from "common/mixin";
import { debounce } from "common/utils";

import DetailNavBar from "./child-components/DetailNavBar";
import DetailSwiper from "./child-components/DetailSwiper";
import DetailInfo from "./child-components/DetailInfo";
import DetailEvaluate from "./child-components/DetailEvaluate";
import DetailImageInfo from "./child-components/DetailImageInfo";
import DetailRecommend from "./child-components/DetailRecommend";
import DetailBottom from "./child-components/DetailBottomBar";

import { detail, goodsDetail } from "api/detail";
export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailEvaluate,
    DetailImageInfo,
    DetailRecommend,
    DetailBottom,
  },
  mixins: [itemListenerMixin, backTopMixin], //混入
  data() {
    return {
      currentIndex: 0,
      id: null,
      topBanners: [],
      goodsDetail: null,
      detailImageInfo: null,
      detailRecommend: [],
      contentScrollYs: [],
      getThemeTopY: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetail();
    this.getThemeTopY = debounce(() => {
      this.contentScrollYs = [];
      this.contentScrollYs.push(0);
      this.contentScrollYs.push(this.$refs.evaluate.$el.offsetTop + -44);
      this.contentScrollYs.push(this.$refs.imageInfo.$el.offsetTop + -44);
      this.contentScrollYs.push(this.$refs.recommend.$el.offsetTop + -44);
    });
  },
  computed: {},
  methods: {
    getDetail() {
      this.formData = {};
      detail().then((res) => {
        if (res.code === 200) {
          res.data.forEach((item) => {
            if (item.id == this.id) {
              this.topBanners = item.banner;
              this.goodsDetail = new goodsDetail(item.itemInfo, item.columns);
              this.detailImageInfo = item.imageInfo;
              this.detailRecommend = item.itemList;
            }
          });
        }
      });
    },
    clickTitle(tabIndex) {
      this.currentIndex = tabIndex;
      if (this.$refs.scroll) {
        this.$refs.scroll.scrollTo(0, -this.contentScrollYs[tabIndex], 100);
      }
    },
    contentScroll(position) {
      let positionY = -position.y;
      let contentScrollYs = this.contentScrollYs;
      let length = contentScrollYs.length - 1;
      contentScrollYs.forEach((item, index) => {
        if (
          (this.currentIndex != index &&
            index < length &&
            positionY >= contentScrollYs[parseInt(index)] &&
            positionY < contentScrollYs[parseInt(index + 1)]) ||
          (index == length && positionY >= contentScrollYs[parseInt(index)])
        ) {
          if (index != this.currentIndex) {
            this.currentIndex = parseInt(index);
          }
        }
      });
      // 1.判断backTopImg是否显示
      this.isShowBackTopImg = positionY > 300;
    },
    // 商品详情
    detailImageInfoLoad() {
      this.newRefresh();
      this.getThemeTopY();
    },
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 3;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 3;
  background-color: #fff;
  width: 100vw;
}
.scroll-content {
  height: calc(100% - 93px);
  overflow: hidden;

  background-color: #f5f5f5;
}
.detail-swiper-box {
  height: 250px;
}
</style>
