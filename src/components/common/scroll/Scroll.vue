<template>
  <div class="wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  created() {},
  computed: {},
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 可以进行多次上拉加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 3.重新计算scroll内容位置 -- 监听item图片加载完成
    refresh() {
      // console.log("监听图片加载完成");
      this.scroll && this.scroll.refresh();
    },
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 2.监听滚动的位置  -- probeType = 2、probeType = 3
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
    // 3.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("监听滚动到底部");
        this.$emit("pullingUp");
      });
    }
  },
};
</script>
<style scoped>
</style>
