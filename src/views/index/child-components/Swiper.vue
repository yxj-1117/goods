<template>
  <swiper>
    <swiper-item v-for="(item, index) in bannersList" :key="index">
      <a href="">
        <img :src="imageUrl + item.url" alt="" @load="swiperLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
import { imageUrl } from "common/env";
export default {
  props: {
    bannersList: {
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
      isLoad: false,
      imageUrl: imageUrl,
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
