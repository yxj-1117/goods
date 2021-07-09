<template>
  <div>
    <img
      v-for="(item, index) in detailImageInfo"
      :key="index"
      :src="imageUrl + item"
      alt=""
      @load="imageLoad"
    />
  </div>
</template>
<script>
import { imageUrl } from "common/env";
export default {
  props: {
    detailImageInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      imageUrl: imageUrl,
    };
  },
  created() {},
  computed: {},
  methods: {
    imageLoad() {
      this.$emit("detailImageInfoLoad");
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>
