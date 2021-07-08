<template>
  <div id="detail">
    <div class="detail-nav">
      <detail-nav-bar :current-index="currentIndex" @clickTitle="clickTitle" />
    </div>
    <scroll
      ref="scroll"
      class="scroll-content"
      v-if="goodsDetail"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-banners="topBanners" class="detail-swiper-box" />
      <detail-info :goods-detail="goodsDetail" />
      <detail-evaluate ref="evaluate" />
      <detail-image-info ref="imageInfo" />
      <detail-recommend ref="recommend" />
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./child-components/DetailNavBar";
import DetailSwiper from "./child-components/DetailSwiper";
import DetailInfo from "./child-components/DetailInfo";
import DetailEvaluate from "./child-components/DetailEvaluate";
import DetailImageInfo from "./child-components/DetailImageInfo";
import DetailRecommend from "./child-components/DetailRecommend";

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
  },
  data() {
    return {
      currentIndex: 0,
      id: null,
      topBanners: [],
      goodsDetail: null,
      contentScrollYs: [],
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetail();
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
              this.$nextTick(() => {
                this.contentScrollYs = [];
                this.contentScrollYs.push(0);
                this.contentScrollYs.push(
                  this.$refs.evaluate.$el.offsetTop + -44
                );
                this.contentScrollYs.push(
                  this.$refs.imageInfo.$el.offsetTop + -44
                );
                this.contentScrollYs.push(
                  this.$refs.recommend.$el.offsetTop + -44
                );
              });
            }
          });
        }
      });
    },
    clickTitle(tabIndex) {
      this.currentIndex = tabIndex
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
    },
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
  height: calc(100% - 44px);
  overflow: hidden;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
.detail-swiper-box {
  height: 250px;
}
</style>
