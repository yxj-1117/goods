<template>
  <!-- <div
    class="goods-box"
    v-masonry
    transition-duration="0.3s"
    item-selector=".goods-list-li"
    fit-width="false"
    horizontal-order="false"
  >
    <div class="goods-list-li" v-for="(item, index) in goodsBox" :key="index">
      <goods-list-item v-masonry-tile :goods-item="item" />
    </div>
  </div> -->
  <div class="goods-box">
    <div class="goods-list-li" v-for="(item, index) in goodsBox" :key="index">
      <goods-list-item :goods-item="item" />
    </div>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goodsBox: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
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
/* .goods-box {
  width: 100vw;
  display: flex;
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
.goods-list-li {
  margin-right: 10px;
  width: calc(50vw - 15px);
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.goods-list-li:nth-child(2n) {
  margin-right: 0;
} */
.goods-box {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
.goods-list-li {
  margin-right: 10px;
  width: calc(50vw - 15px);
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.goods-list-li:nth-child(2n) {
  margin-right: 0;
}
</style>
