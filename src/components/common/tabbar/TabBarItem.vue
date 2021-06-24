<template>
  <div class="tab-bar-item" @click="tabItemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    path: String, //路径
    activeColor: {
      type: String,
      default: "#ff5777",
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    tabItemClick() {
      if (this.$route.path.indexOf(this.path) === -1) {
        this.$router.replace(this.path);
      }
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  color: #b1aeae;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 49px;
  padding: 4px 0;
  box-sizing: border-box;
  justify-content: space-between;
  font-size: 14px;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
