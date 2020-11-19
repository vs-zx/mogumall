<template>
    <scroll v-if="cartList.length" ref="cartScroll">
      <cart-list-item
        v-for="(item,index) in cartList"
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
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll,
    CartListItem,
  },
  computed:{
    isRefresh(){
      const a=this.$store.getters.cartCount;
      this.toRefresh();
      return a;
    }
  },
  methods:{
    toRefresh(){
      this.$refs.cartScroll.scroll.refresh();
    }
  }
};
</script>

<style scoped></style>
