<template>
  <div id="tab-bar">
    <slot></slot>
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
#tab-bar {
  width: 100vw;
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  box-shadow: 0px -1px 1px rgba(94, 93, 93, 0.05);
  background-color: var(--color-background);
}
</style>
