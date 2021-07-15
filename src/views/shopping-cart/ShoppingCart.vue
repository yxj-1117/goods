<template>
  <div class="shopping-cart-page">
    <shopping-cart-bottom-bar />
  </div>
</template>
<script>
import ShoppingCartBottomBar from "./child-components/ShoppingCartProduct";
export default {
  components: {
    ShoppingCartBottomBar,
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
.shopping-cart-page {
  min-height: 100vh;
  padding: 10px 10px 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
</style>
