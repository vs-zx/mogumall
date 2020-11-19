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
    <scroll
      class="detail-content"
      ref="detailScroll"
      @scrolling="detailScrolling"
    >
      <!-- 1 轮播 -->
      <detail-swiper :banners="topImages"></detail-swiper>
      <!-- 2 商品概况 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 3 店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 4 商品详情 -->
      <detail-goods-info
        :detailInfo="detailInfo"
        ref="shopping"
      ></detail-goods-info>
      <!-- 5 商品参数 -->
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <!-- 6 评论区 -->
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <!-- 7 推荐商品列表 -->
      <detail-recommend-info
        :recommendInfo="recommendInfo"
        ref="recommend"
      ></detail-recommend-info>
    </scroll>

    <!-- 加入购物车 -->
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!-- 回到顶部 -->
    <div @click="backDTop" v-show="isShow">
      <back-top></back-top>
    </div>
    <!-- 商品添加成功提示 -->
    <div class="tip" :class="{ 'tip-active': isShowTip }" ref="tip">
      商品添加成功
    </div>
  </div>
</template>

<script>
import DetailSwiper from "./DetailSwiper";
import DetailBaseInfo from "./DetailBaseInfo";
import DetailShopInfo from "./DetailShopInfo";
import DetailParamInfo from "./DetailParamInfo";
import DetailGoodsInfo from "./DetailGoodsInfo";
import DetailCommentInfo from "./DetailCommentInfo";
import DetailRecommendInfo from "./DetailRecommendInfo";
import DetailBottomBar from "./DetailBottomBar";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import {
  getDetailShopData,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamInfo,
    DetailGoodsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
    BackTop,
  },
  data() {
    return {
      iid: "",
      titles: ["商品", "参数", "评论", "推荐"],
      Dom: ["shopping", "param", "comment", "recommend"],
      currentIndex: 0,
      topImages: [], // 顶部轮播图片
      goods: {}, // 商品概况
      shop: {}, // 商铺信息
      detailInfo: {}, // 商品详情
      paramInfo: {}, // 商品尺寸等参数
      commentInfo: {}, // 评论信息
      recommendInfo: [], //推荐商品
      isShow: false, // 回到顶部
      isShowTip: false,
      paramHeight: 0,
      commentHeight: 0,
      recommendHeight: 0,
      isLoaded: false, //组件是否加载完毕
      timer: null,
    };
  },
  methods: {
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
      // console.log(data);
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
      // 6 评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    },
    // 请求推荐商品数据
    getDetailRecommend() {
      getRecommend().then((res) => {
        this.getDetailRecommendSucess(res);
      });
    },
    getDetailRecommendSucess(res) {
      if (res.success) {
        this.recommendInfo = res.data.list;
      }
    },
    // 总是滚动，在滚动状态做操作
    detailScrolling(position) {
      this.$refs.detailScroll.scroll.refresh();
      this.getRefsHeight();

      // 实时获取滚动距离
      const y = -position.y;
      // 切换回到顶部按钮的显示
      this.showDBackTop(y);
      // 标题栏随着滚动，激活状态随着更改
      if (y > this.recommendHeight - 50) {
        this.currentIndex = 3;
      } else if (y > this.commentHeight - 50) {
        this.currentIndex = 2;
      } else if (y > this.paramHeight - 50) {
        this.currentIndex = 1;
      } else {
        this.currentIndex = 0;
      }
      // console.log('-----------------'+this.currentIndex);
      // console.log('---------y--------'+y);
      // console.log(this.paramHeight, this.commentHeight, this.recommendHeight);
    },
    // 获取 标题栏 4 项 的y轴偏移量
    getRefsHeight() {
      this.paramHeight = this.$refs.param.$el.offsetTop;
      this.commentHeight = this.$refs.comment.$el.offsetTop;
      this.recommendHeight = this.$refs.recommend.$el.offsetTop;
    },
    // 标题点击刷新、并滚动到对应位置
    titleClick(idx) {
      this.$refs.detailScroll.scroll.refresh();
      if (!this.isLoaded) {
        return;
      }
      if (this.currentIndex === idx) {
        return;
      }
      this.currentIndex = idx;
      // 获取滚动dom元素
      const scrollDom = this.$refs[this.Dom[idx]].$el;
      // 调用方法滚动
      this.$refs.detailScroll.scroll.scrollToElement(scrollDom, 1000);
    },
    // 返回顶部
    backDTop() {
      this.$refs.detailScroll.scroll.scrollTo(0, 0, 1500);
    },
    // 返回顶部按钮的显示操作函数
    showDBackTop(y) {
      this.isShow = y > 600;
    },
    // 添加到购物车
    addToCart() {
      if (!this.isLoaded) {
        return;
      }
      this.showTip();
      console.log("加入购物车");
      // 1.创建对象
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.count = 1;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.lowNowPrice = this.goods.lowNowPrice;
      // 3.添加到Store中
      this.$store.commit("addCart", obj);
    },
    // 显示添加成功
    showTip() {
      this.isShowTip = true;
      setTimeout(() => {
        this.isShowTip = false;
      }, 1990);
    },
  },
  created() {
    // 根据具体商品点击切换时的路由，获取参数id
    this.iid = this.$route.params.id;
    // 初始化商品数据
    this.getDetailShop();
    // 请求推荐数据
    this.getDetailRecommend();
  },
  mounted() {
    this.$nextTick(() => {
      this.isLoaded = true;
      this.$refs.detailScroll.scroll.refresh();
    });
  },
  beforeDestroy() {
    this.isLoaded = false;
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
  overflow: hidden;
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
  .tip {
    position: absolute;
    left: 50%;
    top: 30%;
    margin-left: -100px;
    margin-top: -40px;
    z-index: 20;
    width: 200px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid var(--tint-color);
    border-radius: 10px;
    display: none;
  }
  .tip-active {
    display: block;
    transition: all 2s;
    animation: animate 2s ease-in-out;
  }
}
@keyframes animate {
  0% {
    transform: translateY(100%) scale(0.5);
    opacity: 0.1;
  }
  35% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>