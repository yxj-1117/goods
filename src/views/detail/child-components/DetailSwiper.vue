<template>
  <swiper>
    <swiper-item v-for="(item, index) in topBanners" :key="index">
      <a href="">
        <img :src="imageUrl + item" alt="" @load="swiperLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

import { imageUrl } from "common/env";
export default {
  props: {
    topBanners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      imageUrl: imageUrl,
      isLoad: false,
    };
  },
  created() {},
  computed: {},
  methods: {
    swiperLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>
<style scoped>
</style>
