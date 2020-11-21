<template>
  <div id="home">
    <!-- 首页导航 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 首页商品分类控制 复制品 -->
    <tab-control
      class="tab-stick"
      :titles="['流行', '新款', '精选']"
      :initIndex="initIndex"
      @tabClick="handleTabClick"
      v-show="isStick"
    ></tab-control>

    <!-- 滚动内容 -->
    <scroll
      class="home-content"
      ref="scroll"
      @updataGoods="updataGoods"
      @scrolling="homeScrolling"
    >
      <!-- 首页轮播 -->
      <home-swiper :banners="banners" :isKeep="isKeep"></home-swiper>
      <!-- 首页推荐 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 首页特征视图 -->
      <feature-view></feature-view>
      <!-- 首页商品分类控制 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        :initIndex="initIndex"
        @tabClick="handleTabClick"
        ref="tabControl"
      ></tab-control>
      <!-- 首页商品展示列表 -->
      <goods-list :goods="currentGoods"></goods-list>
    </scroll>

    <!-- 回到顶部 -->
    <div @click="backClick" v-show="isShow">
      <back-top></back-top>
    </div>
  </div>
</template>

<script>
// 获取首页依赖公共子组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

// 获取首页依赖直接子组件
import HomeSwiper from "./HomeSwiper";
import HomeRecommend from "./HomeRecommend";
import FeatureView from "./FeatureView";

// 获取首页网络请求
import { getHomeMultiData, getHomeGoodsData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [], // 轮播数据
      dKeyword: [],
      keywords: [],
      recommends: [], // 推荐数据
      // 商品数据
      goods: {
        pop: {
          page: 1,
          list: [],
        },
        new: {
          page: 1,
          list: [],
        },
        sell: {
          page: 1,
          list: [],
        },
      },
      type: ["pop", "new", "sell"],
      currentType: "pop",
      timer: null,
      timer2: null,
      isShow: false,
      tabOffestTop: 0,
      isStick: false,
      initIndex: 0, // 同步tab-control下标
      isKeep: false, // 是否保持状态
    };
  },
  computed: {
    // 根据tab类型切换，自动更新商品展示数据
    currentGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 请求首页主题多重数据
    getHomeMulti() {
      getHomeMultiData().then((res) => this.getHomeMultiDataSucess(res));
    },
    getHomeMultiDataSucess(res) {
      this.banners = res.data.banner.list;
      this.dKeyword = res.data.dKeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommends = res.data.recommend.list;
    },
    // 请求商品数据,根据每次的 类型，以及当前页码请求
    getHomeGoods(type) {
      if (this.timer2) {
        return;
      }
      this.timer2 = setTimeout(() => {
        // 先赋值，后 ++   ，所以每次都是请求对应类型的下一页数据
        let page = this.goods[type].page++;
        getHomeGoodsData(type, page).then((res) =>
          this.getHomeGoodsDataSucess(res)
        );
        this.timer2 = null;
      }, 900);
    },
    getHomeGoodsDataSucess(res) {
      // console.log(res);
      if (!res.success) {
        return;
      }
      const type = res.data.sort;
      this.goods[type].list.push(...res.data.list);
    },
    // 点击tab切换类型。切换展示列表
    handleTabClick(idx) {
      this.currentType = this.type[idx];
      this.initIndex = idx;
      // 回到商品栏顶部
      this.$refs.scroll.scroll.scrollToElement(this.$refs.tabControl.$el);
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh();
      });
    },
    // 回到顶部
    backClick() {
      // console.log(this.$refs.scroll);
      this.$refs.scroll.scroll.scrollTo(0, 0, 2000);
    },
    // 对实时滚动，做出操作  —— 决定返回按钮、tabControl的显示性
    homeScrolling(position) {
      this.initTabOffset();

      this.showTabStick(-position.y);
      this.showBackTop(-position.y);
    },
    // 初始化tabControl的y轴偏移量
    initTabOffset() {
      if (this.tabOffestTop) {
        return;
      }
      this.tabOffestTop = this.$refs.tabControl.$el.offsetTop;
      // console.log(this.tabOffestTop);
    },
    // 控制 固定区 tab-control的显示属性boolean
    showTabStick(y) {
      this.isStick = y > this.tabOffestTop + 3;
    },
    // 控制backtop的显示隐藏
    showBackTop(y) {
      this.isShow = y > 600;
    },
    // 上拉加载新数据  根据当前类型去请求数据
    updataGoods() {
      this.getHomeGoods(this.currentType);
    },
  },
  created() {
    // 初始化请求数据
    this.getHomeMulti();
    this.getHomeGoods("pop");
    setTimeout(() => {
      this.getHomeGoods("new");
    }, 1000);
    setTimeout(() => {
      this.getHomeGoods("sell");
    }, 2000);
  },
  mounted() {
    this.$nextTick(() => {
      // 初始化，确保可滑动
      this.$refs.scroll.scroll.refresh();
    });
  },
  activated() {
    this.isKeep = true;
    // console.log("activated");
  },
  deactivated() {
    this.isKeep = false;
    // console.log("deactivated");
  },
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 44px;
  padding-bottom: 49px;
  .home-nav {
    background: var(--tint-color);
    color: #fff;
    font-weight: bold;
  }
  .tab-stick {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    transition: all 0.5s;
    z-index: 9;
  }
  .home-content {
    height: 100%;
  }
}
</style>
