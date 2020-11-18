<template>
  <div class="goods-info" v-if="isShow">
    <!-- 标题 -->
    <div class="title">商品详情</div>
    <!-- 描述 -->
    <div class="info-desc clearfix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}。</div>
      <div class="end"></div>
    </div>
    <!-- 关键字 -->
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <!-- 图片展示列表 -->
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  computed: {
    isShow() {
      return Object.keys(this.detailInfo).length !== 0;
    },
  }
};
</script>

<style lang="scss" scoped>
.goods-info {
  padding: 20px 10px;
  border-bottom: 5px solid #f2f5f8;
  .title {
    font-weight: bold;
    line-height: 22px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 6px;
  }
  .info-desc {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    .start,
    .end {
      position: relative;
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
      &::after {
        content: "";
        position: absolute;
        // left:0;
        bottom: 0;
        width: 5px;
        height: 5px;
        background-color: #333;
      }
    }
    .end {
      align-self: flex-end;
      &::after {
        right: 0;
      }
    }
    .desc {
      padding: 15px 0;
      font-size: 14px;
      letter-spacing: 2px;
    }
  }
  .info-key {
    margin: 10px 0;
    padding-left: 10px;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
}
</style>
