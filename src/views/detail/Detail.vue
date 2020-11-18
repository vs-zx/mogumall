<template>
  <div id="detail">
    <!-- 详情页导航 -->
    <nav-bar class="detail-nav">
      <template v-slot:left>
        <div class="back-btn" @click="backClick">
          <img src="~assets/img/common/back.svg" />
        </div>
      </template>
      <template v-slot:center>
        <div class="titles">
          <div
            class="titles-item"
            v-for="(item, index) in titles"
            :class="{ active: currentIndex === index }"
            @click="titleClick(index)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
    <!-- 滚动内容 -->
    <scroll class="detail-content" ref="detailScroll">
      <!-- 轮播 -->
      <detail-swiper :banners="topImages" ref="swiper"></detail-swiper>
      <!-- 商品概况 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 商品详情 -->
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <!-- 商品参数 -->
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
    </scroll>
    <!-- 加入购物车 -->

  </div>
</template>

<script>
import DetailSwiper from "./DetailSwiper";
import DetailBaseInfo from "./DetailBaseInfo";
import DetailShopInfo from "./DetailShopInfo";
import DetailParamInfo from "./DetailParamInfo";
import DetailGoodsInfo from "./DetailGoodsInfo";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import { getDetailShopData, Goods, Shop, GoodsParam } from "network/detail";

export default {
  name: "Detail",
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamInfo,
    DetailGoodsInfo,
    Scroll,
  },
  data() {
    return {
      iid: "",
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      topImages: [],
      goods: {}, // 商品概况
      shop: {}, // 商铺信息
      paramInfo: {}, // 商品尺寸等参数
      detailInfo: {}, // 商品详情
    };
  },
  methods: {
    // 标题点击切换
    titleClick(idx) {
      if (this.currentIndex === idx) {
        return;
      }
      this.currentIndex = idx;
      const scrollInstance=this.$refs.detailScroll.scroll;
      scrollInstance.refresh();
      if (idx === 0) {
        scrollInstance.scrollToElement(this.$refs.swiper.$el,1000);
      }
      if (idx === 1) {
        scrollInstance.scrollToElement(this.$refs.param.$el,1000);
      }
    },
    // 返回商品列表页
    backClick() {
      this.$router.back();
    },
    // 请求数据
    getDetailShop() {
      getDetailShopData(this.iid).then((res) =>
        this.getDetailShopDateSucess(res)
      );
    },
    getDetailShopDateSucess(res) {
      const data = res.result;
      console.log(data);
      // 1 顶部轮播数据
      this.topImages = data.itemInfo.topImages;
      // 2 商品概况数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3 店铺信息
      this.shop = new Shop(data.shopInfo);
      // 4 商品参数
      this.paramInfo = new GoodsParam(data.itemParams);
      // 5 商品详情数据
        this.detailInfo = data.detailInfo;
    },
  },
  created() {
    // 根据具体商品点击切换时的路由，获取参数id
    this.iid = this.$route.params.id;
  },
  mounted() {
    // 初始化商品数据
    this.getDetailShop();
  },
};
</script>

<style lang="scss" scoped>
#detail {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 44px;
  padding-bottom: 49px;
  background: #fff;
  z-index: 10;
  .detail-nav {
    .back-btn img {
      margin-top: 11px;
    }
    .titles {
      display: flex;
      .titles-item {
        flex: 1;
      }
      .active {
        color: red;
      }
    }
  }
  .detail-content {
    height: 100%;
  }
}
</style>