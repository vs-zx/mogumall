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
  display: flex;
  line-height: 44px;
  text-align: center;
  letter-spacing: 3px;
  box-shadow:0 1px 5px 0 rgba(100,100,100,.2);
}
.nav-bar-left,.nav-bar-right {
  width: 60px;
}
.nav-bar-center {
  flex: 1;
}
</style>>
