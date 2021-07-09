<template>
  <div class="back-top-img">
    <img src="~assets/img/index/back-top .png" alt="" />
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
.back-top-img {
  position: fixed;
  bottom: 60px;
  width: 40px;
  background-color: #fff;
  border-radius: 50%;
  height: 40px;
  z-index: 10;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 0px 3px 1px rgb(218, 215, 215);
}
.back-top-img img {
  width: 25px;
  height: 25px;
}
</style>
