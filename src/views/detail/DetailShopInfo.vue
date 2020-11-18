<template>
  <div class="shop-info" v-if="isShow">
    <!-- 顶部商铺logo、名称 -->
    <div class="shop-top">
      <img :src="shop.logo" class="shop-logo" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <!-- 中部 销量、评分 -->
    <div class="shop-middle">
      <!-- 销量 -->
      <div class="shop-middle-item shop-middle-left">
        <!-- 总销量 -->
        <div class="info-sells">
          <div class="count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="text">总销量</div>
        </div>
        <!-- 店铺宝贝数 -->
        <div class="info-goods">
          <div class="count">
            {{ shop.goodsCount }}
          </div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <!-- 评分 -->
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score | scoreFilter }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    isShow() {
      return Object.keys(this.shop).length !== 0;
    },
  },
  filters: {
    // 过滤总销量
    sellCountFilter(val) {
      if (val < 10000) return val;
      return (val / 10000).toFixed(1) + "万";
    },
    // 过滤评分
    scoreFilter(val) {
      return val.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  display: flex;
  align-items: center;
  height: 45px;
  line-height: 45px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .title {
    margin-left: 10px;
    vertical-align: center;
  }
}

.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    .count {
      font-size: 18px;
    }
    .text {
      margin-top: 10px;
      font-size: 12px;
    }
  }
  .shop-middle-right {
    font-size: 13px;
    color: #333;
    table {
      width: 120px;
      margin: 0 auto;
      td {
        padding: 5px 0;
      }
    }
    .score {
      padding-left:8px;
      padding-right:8px;
      color: #5ea732;
    }
    .score-better {
      color: #f13e3a;
    }
    .better span{
      padding:1px;
      background-color: #5ea732;
      color: #fff;
      text-align: center;
    }
    .better-more span{
      background-color: #f13e3a;
    }
  }
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
  .enter-shop {
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    background-color: #f2f5f8;
    border-radius: 10px;
  }
}
</style>
