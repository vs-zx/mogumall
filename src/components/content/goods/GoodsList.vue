<template>
  <div class="goods-wrap" v-if="goods.length">
      <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"

export default {
  name:"GoodsList",
  props: {
    goods: {
      type: Array,
      default: [],
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style lang="scss" scoped>
.goods-wrap{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  background:#eee;
  border-bottom:8px solid #eee;
  padding:0 2px;
}
</style>