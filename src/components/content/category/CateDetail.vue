<template>
  <div>
    <!-- 分类详情 控制 -->
    <tab-control
      class="cate-control"
      :titles="['综合', '新品', '销量']"
      :initIndex="currentIndex"
      @tabClick="tabClick2"
    ></tab-control>
    <!-- 分类详情商品 -->
    <goods-list :goods="list"></goods-list>
  </div>
</template>

<script>
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import Bus from "common/bus.js";

export default {
  name: "CateDetail",
  components: {
    TabControl,
    GoodsList,
  },
  props: {
    detailDate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      type: ["pop", "new", "sell"],
      currentIndex: 0,
      currentType: "pop",
    };
  },
  computed: {
    list() {
      return this.detailDate[this.currentType];
    },
  },
  methods: {
    tabClick2(index) {
      this.currentIndex = index;
      this.currentType = this.type[index];
    },
  },
  mounted() {
    // console.log(this.detailDate);
    Bus.$on("CateRefresh", () => {
      this.currentIndex=0;
    });
  },
};
</script>

<style scoped>
.cate-control {
  border-top: 1px solid #eee;
}
</style>
