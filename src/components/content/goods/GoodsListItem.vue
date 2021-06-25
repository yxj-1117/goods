<template>
  <div class="goods-list-item">
    <img :src="$store.state.imageUrl + goodsItem.image" alt="" />
    <div class="item-info">
      <div class="item-title ellipsis">{{ goodsItem.title }}</div>
      <div class="item-content">
        <span class="item-price">{{ goodsItem.price }}</span>
        <span class="item-salesVolume">{{ goodsItem.salesVolume }} 人付款</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
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
img {
  width: 100%;
  border-radius: 5px 5px 0 0;
}
.item-info {
  padding: 5px 5px 10px;
  box-sizing: border-box;
}
.item-title {
  font-size: 12px;
  color: #000;
  margin-bottom: 5px;
}
.item-content {
  display: flex;
  align-items: center;
}
.item-price {
  font-size: 14px;
  color: #c91b1b;
  margin-right: 10px;
}
.item-salesVolume {
  font-size: 6px;
  color: #949494;
}
</style>
