<template>
  <!-- 容器高度必须小于内容告诉， 设置容器高度固定，内容自适应 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null,
      timer: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 创建实例
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: {
          threshold: 50,
          stop: 0,
        },
      });
      // 监听上拉事件
      this.scroll.on("pullingUp", () => {
        this.$emit("updataGoods"); // 抛出事件，请求新数据
        this.scroll.refresh(); // 更新
        this.scroll.finishPullUp(); // 结束上拉
      });
      // 监听滚动
      this.scroll.on("scroll", (position) => {
        if (this.timer) {
          return;
        }
        this.timer = setTimeout(() => {
          // 滚动时，时刻抛出正在滚动的事件
          this.$emit("scrolling", position);
          this.timer = null;
        }, 300);
      });
    });
  },
  beforeDestroy() {
    // 对于不被缓存的scroll组件，离开时销毁它
    this.scroll=null;
    // console.log("scroll beforeDestroy");
  },

};
</script>

<style>
</style>