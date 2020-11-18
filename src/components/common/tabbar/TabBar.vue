<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
   
};
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  background: #f5f5f5;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 5px 0 rgba(100, 100, 100, 0.2);
  z-index:9;
}
</style>