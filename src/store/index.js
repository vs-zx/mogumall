import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

// 缓存 --- 用于进行存储、刷新时读取存储；其它时候，一般无关
const localCartList = JSON.parse(localStorage.getItem("cList"));
const localBuyList = JSON.parse(localStorage.getItem("bList"));

const state = {
  cartList: localCartList || [], // 购物车存在的商品
  buyList: localBuyList || [] // 已购买的清单
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
