<template>
  <div id="category">
    <!-- 分类导航 -->
    <nav-bar class="category-nav">
      <template v-slot:center>
        <div>分类</div>
      </template>
    </nav-bar>
    <div class="btn" @click="handleScrollTo"></div>
    <!-- 分类列表 -->
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>b</li>
        <li>b</li>
        <li>b</li>
        <li>b</li>
        <li>b</li>
        <li>b</li>
        <li>b</li>
        <li ref="testLi">c</li>
        <li>c</li>
        <li>c</li>
        <li>c</li>
        <li>c</li>
        <li>c</li>
        <li>c</li>
        <li>c</li>
        <li>c</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>d</li>
        <li>e</li>
        <li>e</li>
        <li>e</li>
        <li>e</li>
        <li>e</li>
        <li>e</li>
        <li>e</li>
        <li>e</li>
        <li>e</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>g</li>
        <li>g</li>
        <li>g</li>
        <li>g</li>
        <li>g</li>
        <li>g</li>
        <li>g</li>
        <li>g</li>
        <li>g</li>
        <li>g</li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

// import BScroll from "better-scroll";

export default {
  name: "Category",
  components: {
    NavBar,
  },
  methods: {
    handleScrollTo() {
      console.log(1);
      // this.scroll.scrollTo(0,-300);
      // this.scroll.scrollToElement(this.$refs.testLi, 3000);
    },
  },
  created() {
    this.$nextTick(() => {
      const el = this.$refs.wrapper;
      // this.scroll = new BScroll(el, {
      //   click: true,
      //   pullDownRefresh: {
      //     threshold: 50, // 下拉阈值，超过才会生效
      //     stop: 0,
      //   },
      //   pullUpLoad: {
      //     threshold: 50, // 上拉阈值，超过才会生效
      //     stop: 0,
      //   },
      // });

      // this.scroll.on('beforeScrollStart',()=>{
      //   console.log('滚动之前');
      // });
      // this.scroll.on('scrollStart',()=>{
      //   console.log('开始滚动');
      // });
      // this.scroll.on('scroll',()=>{
      //   console.log('正在滚动');
      // });
      //  this.scroll.on('scrollEnd',()=>{
      //   console.log('滚动结束');
      // });
      // this.scroll.on('flick',()=>{
      //   console.log('flick');
      // });
      // this.scroll.on("pullingDown", () => {
      //   console.log("向下拉");
      //   this.scroll.finishPullDown();
      // });
      // this.scroll.on("pullingUp", () => {
      //   console.log("向上拉");
      //   this.scroll.finishPullUp();

      // });
    });
  },
};
</script>

<style lang="scss" scoped>
#category {
  padding-top: 44px;
}
.category-nav {
  background: var(--background-color);
}

.wrapper {
  width: 100%;
  height: 400px;
  background: pink;
  border: 2px solid red;
  overflow: hidden;
  li {
    height: 28px;
    border: 1px solid #000;
    margin-bottom: 20px;
    background: orange;
  }
}

.btn {
  height: 100px;
  background: blue;
  opacity: 0.5;
}
</style>