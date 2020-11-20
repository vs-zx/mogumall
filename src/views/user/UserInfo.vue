<template>
  <div id="user-info">
    <div class="info-left"></div>
    <div class="info-right">
      <div class="username">登录/注册</div>
      <div class="phone">暂无绑定手机号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style lang="scss" scoped>
#user-info {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--tint-color);
  padding: 15px;
  border-top: 1px solid #fff;
  overflow: hidden;

  .info-left {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #fff;
  }
  .info-right {
    flex: 1;
    .username,
    .phone {
      font-size: 16px;
      color: #fff;
      padding: 5px;
    }
  }
}
</style>
