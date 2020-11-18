<template>
  <div class="home-swiper" v-if="banners.length&&isKeep">
    <swiper ref="mySwiper" :options="swiperOptionsSwp1">
      <swiper-slide v-for="item of banners" :key="item.acm">
        <a :href="item.link" target="_black">
          <img :src="item.image" :alt="item.title" />
        </a>
      </swiper-slide>
      <div class="swiper-button-prev swp1" slot="button-prev"></div>
      <div class="swiper-button-next swp1" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:"HomeSwiper",
  props: {
    banners: {
      type: Array,
      default: [],
    },
    isKeep:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      swiperOptionsSwp1: {
        loop: true,
        // 自动切换
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 箭头按钮
        navigation: {
          nextEl: ".swiper-button-next.swp1",
          prevEl: ".swiper-button-prev.swp1",
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
.home-swiper {
  width: 100%;
}
.swiper-slide {
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
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
</style>