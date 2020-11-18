<template>
  <div class="base-info" v-if="isShow">
    <!-- 标题 -->
    <div class="info-title">{{ goods.title }}</div>
    <!-- 价格 -->
    <div class="info-price">
      <!-- 范围 -->
      <span class="r-price">{{ goods.rangePrice }}</span>
      <!-- 原价 -->
      <span class="o-price">原价{{ goods.oldPrice }}</span>
      <!-- 折扣 -->
      <span v-if="goods.discount" class="discount"
        >全场{{ goods.discount }}</span
      >
    </div>
    <!-- 其它信息 -->
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <!-- 服务 -->
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="(item, index) in goods.services"
        :key="index"
      >
        <span v-if="item.icon&&index<3">
          <img :src="item.icon" />
          <span>{{ item.name }}</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    isShow() {
      return Object.keys(this.goods).length !== 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-info {
  margin-top: 15px;
  padding: 0 10px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  .info-title {
    color: #222;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.05);
  }
  .info-price {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.05);
    .r-price {
      font-size: 20px;
      font-weight: bold;
      color: rgb(255, 68, 68);
    }
    .o-price {
      margin-left: 20px;
      font-size: 14px;
      text-decoration: line-through;
    }
    .discount {
      float: right;
      padding: 2px 5px;
      margin-right: 10px;
      font-size: 14px;
      border-radius: 8px;
      color: #f13e3a;
    }
  }

  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    color: #999;
    border-bottom: 1px solid rgba(100, 100, 100, 0.05);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    .info-service-item {
      img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
        right: 2px;
      }
      span {
        font-size: 13px;
        color: #333;
      }
    }
  }
}
</style>
