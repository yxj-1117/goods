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
      this.scroll.scrollTo(x, y, time);
    },
    // 可以进行多次上拉加载
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 2.监听滚动的位置  -- probeType
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 3.监听上拉加载更多事件  -- pullUpLoad
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
};
</script>
<style scoped>
</style>
