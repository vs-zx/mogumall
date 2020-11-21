<template>
  <scroll v-if="isShow" ref="cartScroll">
    <cart-list-item
      v-for="(item, index) in cartList"
      :cart-item="item"
      :index="index"
      :key="item.iid"
    ></cart-list-item>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    isShow() {
      return this.cartList.length;
    },
  },
};
</script>

<style scoped></style>
