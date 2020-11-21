<template>
  <div class="cate-base">
    <div class="base-item" v-for="(item, index) in baseDate.list" :key="index">
      <a :href="item.link" target="_black">
        <img class="base-img" v-lazy="item.image" alt="item.title" />
        <div class="base-text">{{ item.title }}</div>
      </a>
    </div>
    <!-- 占位元素 -->
    <div class="temp" v-for="(i,index) in 10" :key="'temp'+index"></div>
  </div>
</template>

<script>
export default {
  name: "CateBase",
  props: {
    baseDate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    // console.log(this.baseDate)
  },
};
</script>

<style lang="scss" scoped>
.cate-base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  border-bottom:8px solid rgba(100,100,100,.1);
  .base-item {
    width: 80px;
    height: 120px;
    padding: 8px 5px;
    text-align: center;
    a {
      display: block;
    }
    .base-img {
      width: 65px;
      height: 65px;
    }
    .base-text {
      font-size:12px;
      margin-top:10px;
    }
  }
  .temp{
    width:80px;
    height:0;
  }
}
</style>
