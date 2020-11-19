<template>
  <div class="detail-swiper" v-if="banners.length">
    <swiper :options="swiperOptionsSwp2">
      <swiper-slide v-for="item in banners" :key="item">
        <img v-lazy="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      swiperOptionsSwp2: {
        loop: true,
        // 自动切换
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 分页器配置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.detail-swiper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
}

::v-deep .swiper-pagination {
  .swiper-pagination-bullet {
    background: #fff;
    opacity:1;
  }
  .swiper-pagination-bullet-active {
    background: red;
  }
}
</style>