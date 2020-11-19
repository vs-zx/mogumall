<template>
  <div id="app">
    <keep-alive exclude="Detail,ShopCart">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";

export default {
  components: {
    MainTabBar,
  },
};
</script>

<style lang="scss">
// 导入全局基本样式
@import "~assets/css/base.css";
#app {
  width: 100%;
  height: 100vh;
}
</style>
