import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 自定义弹窗插件
import toast from 'components/common/toast'
// 懒加载
import VueLazyLoad from "vue-lazyload";
// 轮播
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// 300ms
import FastClick from 'fastclick'


Vue.use(toast);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require("./assets/img/loading/loading_1.gif"),
  loading: require("./assets/img/loading/loading_1.gif"),
  attempt: 2
});
Vue.use(VueAwesomeSwiper);
FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
