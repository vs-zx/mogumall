<template>
  <div id="category">
    <!-- 导航 -->
    <nav-bar class="category-nav">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <!-- 内容区 分两侧-相对应 -->
    <div class="category-content">
      <!-- 左侧菜单 -->
      <cate-menu
        class="content-left"
        :menus="menus"
        @changgeTab="changgeTab"
      ></cate-menu>
      <!-- 右侧子类内容展示区 ；根据菜单变化，动态切换数据-->
      <cate-content
        class="content-right"
        :contentData="currentContent"
      ></cate-content>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CateMenu from "./CateMenu";
import CateContent from "./CateContent";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
import Bus from 'common/bus.js'

export default {
  name: "Category",
  components: {
    NavBar,
    CateMenu,
    CateContent,
  },
  data() {
    return {
      menus: [], // 菜单列表
      Contentlist: [], // 内容列表  --  与菜单一一对应
      currentIndex: -1, // 当前菜单位置
      currentContent: {},
    };
  },
  watch: {
    currentIndex(val) {
      // console.log(val);
      this.currentContent = this.Contentlist[val];
      // console.log(this.currentContent);
    },
  },
  methods: {
    // 获取分类菜单数据
    getCateMenu() {
      getCategory().then((res) => this.getCateMenuSuccess(res));
    },
    getCateMenuSuccess(res) {
      // 1 拿到菜单列表
      this.menus = res.data.category.list;
      // 2 按照菜单，初始化子类对象
      for (let i = 0; i < this.menus.length; i++) {
        this.Contentlist[i] = {
          baseDate: {},
          detailDate: {
            pop: [],
            new: [],
            sell: [],
          },
        };
      }
      // 3 更新当前选项，按照它获取第一项数据
      this.currentIndex = 0;
      this.getCateContent();
    },
    // 获取子类数据 -- 按下标，根据菜单项的maitKey
    getCateContent() {
      const index = this.currentIndex;
      // 1 按下标、maitKey 获取基本数据
      this.getBaseDate(index);
      // 2 按下标、miniWallkey、type获取数据
      this.getdetailDate(index, "pop");
      this.getdetailDate(index, "new");
      this.getdetailDate(index, "sell");
    },
    // 基础数据
    getBaseDate(index) {
      const mailKey = this.menus[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        if (!res.success) {
          return;
        }
        this.Contentlist[index].baseDate = res.data;
      });
    },
    // 详细数据
    getdetailDate(index, type) {
      const miniWallkey = this.menus[index].miniWallkey;
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.Contentlist[index].detailDate[type] = res;
      });
    },
    // 切换菜单选项
    changgeTab(index) {
      this.currentIndex = index;
      this.getCateContent();
      Bus.$emit('CateRefresh')
    },
  },
  created() {
    // 请求菜单数据
    this.getCateMenu();
  },
  mounted() {
    // console.log(this.Contentlist);
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
    .content-left {
      width: 100px;
      height: 100%;
    }
    .content-right {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
