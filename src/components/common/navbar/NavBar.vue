<template>
  <div class="nav-bar">
    <div class="nav-bar-left"><slot name="left"></slot></div>
    <div class="nav-bar-center"><slot name="center"></slot></div>
    <div class="nav-bar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  position:fixed;
  left:0;
  right:0;
  top:0;
  display: flex;
  height:44px;
  line-height: 44px;
  text-align: center;
  letter-spacing: 3px;
  background:#fff;
  box-shadow:0 2px 6px 0 rgba(100,100,100,.3);
  z-index:3;
}
.nav-bar-left,.nav-bar-right {
  width: 60px;
}
.nav-bar-center {
  flex: 1;
}
</style>>
