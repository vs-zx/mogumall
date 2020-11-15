<template>
  <div id="home">
    <!-- 首页导航 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 首页轮播 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 首页推荐 -->
    <home-recommend :recommends="recommends"></home-recommend>

  </div>
</template>

<script>
// 获取首页依赖组件
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'views/home/HomeSwiper'
import HomeRecommend from 'views/home/HomeRecommend'
// 获取首页网络请求
import {getHomeMultiData} from 'network/home'

export default {
  name: 'Home',
  data(){
    return {
      banners:[],
      dKeyword:[],
      keywords:[],
      recommends:[]
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  methods:{
    getHomeMultiDataSucess(res){
      console.log(res);
      this.banners=res.data.banner.list;
      this.dKeyword=res.data.dKeyword.list;
      this.keywords=res.data.keywords.list;
      this.recommends=res.data.recommend.list;
    }
  },
  created(){
    // 请求多重数据
    getHomeMultiData().then(res=>this.getHomeMultiDataSucess(res));
  }
}
</script>

<style lang="scss" scoped>
#home{
  width:100%;
}
.home-nav{
  background:var(--tint-color);
  color:#fff;
  font-weight:bold;
}
</style>
