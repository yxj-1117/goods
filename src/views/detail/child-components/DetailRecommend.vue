<template>
  <goods-list :goods-box="detailRecommend" />
</template>
<script>
import GoodsList from "components/content/goods/GoodsList";
export default {
  props: {
    detailRecommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsList,
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
.detail-describe {
  height: 200vh;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
