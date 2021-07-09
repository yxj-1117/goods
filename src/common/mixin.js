import { debounce } from "common/utils";
import BackTop from "components/content/back-top/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    // console.log('我是混入计算img加载完成重新计算高度')
  },
}


// 回到顶部
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTopImg: false,
    }
  },
  methods: {
    // 回到顶部 -- 点击返回顶部的图标
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}