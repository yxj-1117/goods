<template>
  <div class="feature-box">
    <div class="feature-item" v-for="(item, index) in featurelist" :key="index">
      <img :src="$store.state.imageUrl + item.image" alt="" />
      <div>{{ item.label }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    featurelist: {
      type: Array,
      default() {
        return [];
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
.feature-box {
  width: 100%;
  display: flex;
}
.feature-item {
  padding: 10px 0 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 8px solid #eee;
}
.feature-item img {
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
}
.feature-item div {
  margin-top: 10px;
  color: #333;
  font-size: 14px;
}
</style>
