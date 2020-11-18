<template>
  <div class="tab-bar-item" @click="changeRouter">
    <div v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path:  {
      type: String,
      defaulte: "/home",
    },
    activeColor: {
      type: String,
      defaulte: "red",
    },
  },
  computed: {
    isActive: {
      get() {
        return this.$route.path === this.path;
      },
      set(newVal) {
        return newVal;
      },
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor || "red" } : {};
    },
  },
  methods: {
    changeRouter() {
      if (this.$route.path === this.path) {
        return;
      }
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>