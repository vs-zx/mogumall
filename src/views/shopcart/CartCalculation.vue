<template>
  <div id="calculation">
    <div @click="sllectAll">
      <check-button class="select-all" :status="isAll"></check-button>
    </div>
    <span class="select-text">{{ this.isAll ? "取消" : "全选" }}</span>
    <span class="total-price"
      >合计: <span class="total-text">¥{{ totalPrice }}</span></span
    >
    <span class="buy-product" @click="toBuy">去计算({{ checkedCount }})</span>
  </div>
</template>

<script>
import CheckButton from "components/content/cartlist/CheckButton";

export default {
  name: "CartCalculation",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      // 1 获取选中的商品
      const checkedGoods = this.$store.getters.cartList.filter(
        (item) => item.checked
      );
      // 2 计算总价格
      const sum = checkedGoods
        .reduce((a, b) => {
          return a + b.count * b.lowNowPrice;
        }, 0)
        .toFixed(2);
      // 3 返回总价
      return sum;
    },
    checkedCount() {
      // 返回选中的商品数
      return this.$store.getters.checkedCount;
    },
    isAll() {
      const list = this.$store.state.cartList;
      if (list.length) {
        return list.every((item) => item.checked);
      }
      return false;
    },
  },
  methods: {
    sllectAll: function () {
      const list = this.$store.state.cartList;
      if (!list.length) {
        return;
      }
      // 已经全选，再次点击全不选;否则就全选中
      if (this.isAll) {
        list.forEach((item) => {
          item.checked = false;
        });
      } else {
        list.forEach((item) => {
          item.checked = true;
        });
      }
    },
    toBuy() {
      // console.log(this.$store.getters.checkedList);
      // console.log(this.$store.getters.uncheckedList);
      // 如果都没选，提示选择商品
      if (!this.checkedCount) {
        this.$toast.show("请选择商品!");
        return;
      }
      // 购买支付，并清空购物车
      this.$store.commit('payCart',{
        a:this.$store.getters.checkedList,
        b:this.$store.getters.uncheckedList
      });
      this.$toast.show("结算成功", 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
#calculation {
  position: fixed;
  bottom: 49px;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding-left: 35px;
  font-size: 14px;
  color: #888;
  background-color: #eee;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
  .select-all {
    position: absolute;
    left: 11px;
    top: 12px;
    line-height: 0;
  }
  .select-text {
    font-size: 13x;
  }
  .total-price {
    margin-left: 16px;
    font-size: 16px;
    color: #666;
    .total-text {
      color: var(--tint-color);
    }
  }
  .buy-product {
    background-color: orangered;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    color: #fff;
    float: right;
  }
}
</style>
