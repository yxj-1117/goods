<template>
  <swiper>
    <swiper-item v-for="(item, index) in bannersList" :key="index">
      <a href="">
        <img :src="$store.state.imageUrl + item.url" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
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
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
</style>
