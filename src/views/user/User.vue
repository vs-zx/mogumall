<template>
  <div id="user">
    <!-- 用户导航 -->
    <nav-bar class="user-nav">
      <template v-slot:center> 个人中心 </template>
    </nav-bar>
    <!-- 用户信息 -->
    <user-info></user-info>
    <!-- 用户账户情况 -->
    <section class="account">
      <div class="account-item">
        <div class="sum"><span class="number">0.00</span>元</div>
        <div class="account-text">我的余额</div>
      </div>
      <div class="account-item">
        <div class="sum"><span class="number">0</span>个</div>
        <div class="account-text">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="sum"><span class="number">0</span>分</div>
        <div class="account-text">我的积分</div>
      </div>
    </section>
    <!-- 其它选项 -->
    <list-view :list="orderList" class="order-list"></list-view>
    <list-view :list="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
import UserInfo from "./UserInfo";
import ListView from "./ListView";

import NavBar from "components/common/navbar/NavBar";

export default {
  name: "User",
  components: {
    UserInfo,
    ListView,
    NavBar,
  },
  data() {
    return {
      orderList: ["我的消息", "积分商城", "会员卡"],
      serviceList: ["我的购物车", "我的收藏", "下载购物APP"],
    };
  },
};
</script>

<style lang="scss" scoped>
#user {
  width: 100%;
  height: 100%;
  padding-top: 44px;
  padding-bottom: 49px;
  background-color: #f2f2f2;
  .user-nav {
    background-color: var(--tint-color);
    font-weight: 700;
    color: #fff;
    box-shadow: 0 0 0 0 #fff;
  }
  .account {
    display: flex;
    width: 100%;
    .account-item {
      flex: 1;
      background-color: #fff;
      margin-right: 2px;
      text-align: center;
      color: #666;
      font-size: 13px;
      padding: 18px;
      &:last-of-type {
        margin-right: 0;
      }
      .number {
        font-size: 24px;
        font-weight: 700;
        color: #ff5f3e;
        margin: 0 2px;
      }
      .account-text {
        margin-top: 6px;
        font-size: 14px;
      }
    }
  }
  .order-list,
  .service-list {
    margin-top: 12px;
  }
}
</style>
