<template>
  <div>
    <!-- 导航 -->
    <nav-bar class="detail-nav">
      <div slot="left" class="detail-back" @click="clickBack">
        <img
          class="detail-back-img"
          src="~assets/img/index/back-arrow.png"
          alt=""
        />
      </div>
      <div slot="center" class="detail-title">
        <div
          class="detail-title-item"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: currentIndex == index }"
          @click="clickTitle(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/nav-bar/NavBar";
export default {
  components: {
    NavBar,
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      titles: ["商品", "评价", "详情", "推荐"],
    };
  },
  created() {},
  computed: {},
  methods: {
    // 切换顶部导航
    clickTitle(index) {
      this.$emit("clickTitle", index);
    },
    // 返回上一页 -- 点击顶部返回图片
    clickBack() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.detail-nav {
  display: flex;
  align-items: center;
  background-color: var(--color-background);
}
.detail-title {
  display: flex;
  align-items: center;
}
.detail-title-item {
  flex: 1;
}
.detail-title-item.active {
  color: var(--color-high-text);
}
.detail-back {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail-back-img {
  width: 15px;
  height: 15px;
}
</style>
