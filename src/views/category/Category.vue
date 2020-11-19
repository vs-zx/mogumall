<template>
  <div id="category">
    <!-- 导航 -->
    <nav-bar class="category-nav">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <!-- 内容区 分两侧-相对应 -->
    <div class="category-content">
      <!-- 左侧菜单 -->
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>

      <!-- <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
          ></tab-content-category>
          <tab-control
            :titles="['综合', '新品', '销量']"
            @itemClick="tabClick"
          ></tab-control>
          <tab-content-detail
            :category-detail="showCategoryDetail"
          ></tab-content-detail>
        </div>
      </scroll> -->
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
// import Scroll from "components/common/scroll/Scroll";

import TabMenu from "./TabMenu";
// import TabControl from 'content/tabControl/TabControl'
// import TabContentCategory from './childComps/TabContentCategory'
// import TabContentDetail from './childComps/TabContentDetail'

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
// import {POP, SELL, NEW} from "@/common/const";
// import {tabControlMixin} from "@/common/mixin";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    // Scroll,
    // TabControl,
    // TabContentCategory,
    // TabContentDetail
  },
  // mixins: [tabControlMixin],
  data() {
    return {
      categories: [], // 菜单数据
      categoryData: {}, // 子类数据
      currentIndex: -1, // 当前菜单位置
    };
  },
  computed: {
    // showSubcategory() {
    //   if (this.currentIndex === -1) return {};
    //   return this.categoryData[this.currentIndex].subcategories;
    // },
    // showCategoryDetail() {
    //   if (this.currentIndex === -1) return [];
    //   return this.categoryData[this.currentIndex].categoryDetail[
    //     this.currentType
    //   ];
    // },
  },
  methods: {
    // 获取分类菜单数据
    getCategoryMenu() {
      getCategory().then((res) => this.getCategoryMenuSuccess(res));
    },
    getCategoryMenuSuccess(res) {
      // 1 拿到菜单列表
      this.categories = res.data.category.list;
      // // 2 按照菜单，初始化子类
      // for (let i = 0; i < this.categories.length; i++) {
      //   this.categoryData[i] = {
      //     subcategories: {},
      //     categoryDetail: {
      //       pop: [],
      //       new: [],
      //       sell: [],
      //     },
      //   };
      // }
      // // 3 请求第一分类数据
      // this.getSubcategories(0);
    },
    // _getSubcategories(index) {
    //   this.currentIndex = index;
    //   const mailKey = this.categories[index].maitKey;
    //   getSubcategory(mailKey).then((res) => {
    //     this.categoryData[index].subcategories = res.data;
    //     this.categoryData = { ...this.categoryData };
    //     this._getCategoryDetail(POP);
    //     this._getCategoryDetail(SELL);
    //     this._getCategoryDetail(NEW);
    //   });
    // },
    // _getCategoryDetail(type) {
    //   // 1.获取请求的miniWallkey
    //   const miniWallkey = this.categories[this.currentIndex].miniWallkey;
    //   // 2.发送请求,传入miniWallkey和type
    //   getCategoryDetail(miniWallkey, type).then((res) => {
    //     // 3.将获取的数据保存下来
    //     this.categoryData[this.currentIndex].categoryDetail[type] = res;
    //     this.categoryData = { ...this.categoryData };
    //   });
    // },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
  created() {
    // 请求菜单数据，并会在里面初始化子类对象；然后请求第一分类数据
    this.getCategoryMenu();
  },

  mounted() {
    // console.log("------------- 标题");
    // getCategory().then((res) => {
    //   console.log(res);
    // });
    // console.log("------------- 分类之下所有商品");
    // getSubcategory(3627).then((res) => {
    //   console.log(res);
    // });
    // console.log("------------- 单独商品");
    // getCategoryDetail(5000, pop).then((res) => {
    //   console.log(res);
    // });
  },
};
</script>

<style lang="scss" scoped>
#category {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 44px;
  padding-bottom: 49px;
  .category-nav {
    background-color: var(--tint-color);
    font-weight: 700;
    color: #fff;
  }
  .category-content {
    display: flex;
    width: 100%;
    height: 100%;
  }
}

#tab-content {
  height: 100%;
  flex: 1;
}
</style>
