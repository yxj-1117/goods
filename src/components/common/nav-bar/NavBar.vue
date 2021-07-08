<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 0px 1px 1px rgba(94, 93, 93, 0.05);
}
.nav-bar-left,
.nav-bar-right {
  width: 60px;
  height: 100%;
}
.nav-bar .nav-bar-center {
  flex: 1;
  text-align: center;
}
</style>
