<template>
  <div class="goods-item" @click="toDetail">
    <div class="goods-link">
      <img :src="goodsItem.show.img" :alt="goodsItem.title" />
    </div>
    <div class="goods-info">
      <p class="goods-desc">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default: {},
    },
  },
  methods: {
    toDetail() {
      this.$router.push("/detail/"+this.goodsItem.iid);
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-item {
  position: relative;
  width: 48%;
  margin-top: 8px;
  padding-bottom: 40px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .goods-link {
    margin-bottom: 5px;
    img {
      width: 100%;
    }
  }
  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    padding: 5px;
    font-size: 12px;
    text-align: center;
    .goods-desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: var(--high-text-color);
      margin-right: 24px;
    }
    .collect {
      position: relative;
      z-index: 1;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") no-repeat 0 0/14px
          14px;
      }
    }
  }
}
</style>