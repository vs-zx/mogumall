<template>
  <div class="swiper-wrap" v-if="banners.length">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of banners" :key="item.acm">
        <img :src="item.image" alt="" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        // 自动切换
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 箭头按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 分页器配置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    console.log(this.banners);
  },
};
</script>

<style lang="scss" scoped>
// 穿透分页器，修改背景色
::v-deep .swiper-pagination {
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: red;
  }
}
// 修改箭头位置，颜色
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev,
.swiper-button-next {
  outline: none;
  background: rgba(0, 0, 0, 0.3);
  &::after {
    color: #fff;
    font-size: 30px;
  }
}

.swiper-slide {
  height: 200px;
  img{
    width:100%;
    height:100%;
  }
}
</style>