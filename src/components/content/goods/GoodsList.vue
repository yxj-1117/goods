<template>
  <div class="goods-box">
    <goods-list-item
      class="goods-list-item"
      v-for="(item, index) in goodsBox"
      :key="index"
      :goods-item="item"
    />
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
.goods-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
.goods-list-item {
  background-color: #fff;
  width: calc(50% - 10px);
  border-radius: 5px;
  overflow: hidden;
  margin-right: 10px;
  margin-top: 10px;
  height: auto;
}
.goods-list-item:nth-child(2n) {
  margin-right: 0;
}
</style>
