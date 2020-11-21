<template>
  <div id="cart">
    <!-- 购物车导航栏 -->
    <nav-bar class="cart-nav">
      <template v-slot:center>购物车 ({{ cartCount }})</template>
      <template v-slot:right>
        <div class="clearBtn" @click="clearCart">清空</div>
      </template>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list class="cart-list" :cart-list="cartList"></cart-list>
    <!-- 底部计算栏 -->
    <cart-calculation></cart-calculation>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "components/content/cartlist/CartList";

import CartCalculation from "./CartCalculation";

export default {
  name: "ShopCart",
  components: {
    NavBar,
    CartList,
    CartCalculation,
  },
  data() {
    return {
      message: "",
    };
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    },
  },
  methods: {
    // 清空购物车
    clearCart() {
      if (!this.cartCount) {
        return;
      }
      this.$store.commit("clearCart");
      this.$toast.show("购物车已清空");
    },
  },
  mounted() {
    // console.log("进入购物车");
  },
};
</script>

<style lang="scss" scoped>
#cart {
  width: 100%;
  height: 100%;
  padding-top: 44px;
  padding-bottom: 95px;
  .cart-nav {
    width: 100%;
    font-weight: 700;
    color: #fff;
    background-color: var(--tint-color);
  }
  .cart-list {
    height: 100%;
  }
  .clearBtn {
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 7px;
    font-size: 13x;
    color: var(--tint-color);
    background: #fff;
    border-radius: 5px;
  }
}
.buy-title {
  height: 200px;
}
.buy-list {
  height: 500px;
}
</style>