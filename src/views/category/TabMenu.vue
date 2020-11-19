<template>
  <scroll id="category-menu" v-if="categories.length">
    <div class="menu-wrap">
      <div
        class="menu-item"
        v-for="(item, index) in categories"
        :class="{ 'menu-item-active': index === currentIndex }"
        @click="itemClick(index)"
        :key="index"
      >
        {{ item.title }}{{ item }}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "TabMenu",
  components: {
    Scroll,
  },
  props: {
    categories: {
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
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
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
    font-size: 14px;
  }
  .menu-item-active {
    font-weight: 700;
    color: var(--high-text-color);
    background-color: #fff;
    border-left: 3px solid var(--high-text-color);
  }
}
</style>
