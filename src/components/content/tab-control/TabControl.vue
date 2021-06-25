<template>
  <div class="tab-control-box">
    <div
      class="tab-control-item"
      v-for="(item, index) in tabTitles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="clickItem(index)"
    >
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabTitles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  created() {},
  computed: {},
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit("clickTab", index);
    },
  },
};
</script>
<style scoped>
.tab-control-box {
  display: flex;
  text-align: center;
  line-height: 44px;
  height: 40px;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item.active {
  color: var(--color-high-text);
}
.active span {
  display: inline-block;
  height: 35px;
  border-bottom: 3px solid var(--color-tint);
}
</style>
