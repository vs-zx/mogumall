<template>
  <scroll id="category-menu" v-if="menus.length">
    <div class="menu-wrap">
      <div
        class="menu-item"
        v-for="(item, index) in menus"
        :class="{ 'menu-item-active': index === currentIndex }"
        @click="handleTabClick(index)"
        :key="index"
      >
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "CateMenu",
  components: {
    Scroll,
  },
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    handleTabClick(index) {
      if (this.currentIndex === index) {
        return;
      }
      this.currentIndex = index;
      this.$emit("changeTab", index);
    },
  },
};
</script>

<style lang="scss" scoped>
#category-menu {
  height: 100%;
  width: 100px;
  background-color: #f6f6f6;
  overflow: hidden;
  .menu-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    color: #bababa;
    letter-spacing: 1px;
    border-bottom: 1px solid #eee;
    border-left: 3px solid #fff;
  }
  .menu-item-active {
    font-weight: 700;
    color: var(--high-text-color);
    background-color: #fff;
    border-left: 3px solid var(--high-text-color);
  }
}
</style>
