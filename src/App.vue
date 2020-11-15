<template>
  <div id="app">
    <router-view />
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'

export default {
  components:{
    MainTabBar
  }
}
</script>

<style lang="scss">
// 导入全局基本样式
@import "~assets/css/base.css";
</style>
