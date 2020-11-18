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
    });
  },
};
</script>

<style>
</style>